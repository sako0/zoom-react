import { useAuth0 } from '@auth0/auth0-react'
import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
  const [tokenAuth0, setTokenAuth0] = useState<string>('')
  const [zoomToken, setZoomToken] = useState<string>('')
  const [zooomRefreshToken, setZooomRefreshToken] = useState<string>('')
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  const login = useCallback(() => {
    if (user && tokenAuth0) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: tokenAuth0, user_id: user.sub }),
      }
      fetch('http://localhost:1323/login', requestOptions)
    }
  }, [tokenAuth0, user])

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
    zooomRefreshToken,
    login,
  }
}
const decodeJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(decodeURIComponent(escape(window.atob(base64))))
}
