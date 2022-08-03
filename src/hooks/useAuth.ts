import { useAuth0 } from '@auth0/auth0-react'
import { useCallback, useEffect, useState } from 'react'
import { CreateUserRequest } from '../codegen/user/v1/user_pb'
import { UserServiceClient } from '../codegen/user/v1/user_pb_service'

export const useAuth = () => {
  const [tokenAuth0, setTokenAuth0] = useState<string>('')
  const [zoomToken, setZoomToken] = useState<string>('')
  const [zoomRefreshToken, setZooomRefreshToken] = useState<string>('')
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  const createUser = useCallback(async () => {
    const client = new UserServiceClient('http://localhost:8080')
    const requestParam = new CreateUserRequest()
    if (
      user &&
      user.sub &&
      user.name &&
      user.email &&
      zoomToken &&
      zoomRefreshToken
    ) {
      requestParam.setAuth0Id(user.sub)
      requestParam.setName(user.name)
      requestParam.setEmail(user.email)
      requestParam.setZoomToken(zoomToken)
      requestParam.setZoomRefreshToken(zoomRefreshToken)
      const res = await client.createUser(requestParam, (err, res) => {})
      return res
    }
  }, [user, zoomRefreshToken, zoomToken])

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((res) => {
        setTokenAuth0(res)
        setZoomToken(decodeJwt(res)['https://oauth.zoom.us/token'].accessToken)
        setZooomRefreshToken(
          decodeJwt(res)['https://oauth.zoom.us/token'].refreshToken
        )
      })
    }
  }, [getAccessTokenSilently, isAuthenticated])

  return {
    isAuthenticated,
    user,
    tokenAuth0,
    zoomToken,
    zoomRefreshToken,
    createUser,
  }
}
const decodeJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(decodeURIComponent(escape(window.atob(base64))))
}
