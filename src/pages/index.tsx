import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

const decodeJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(decodeURIComponent(escape(window.atob(base64))))
}

const Home = () => {
  const [token, setToken] = useState<string>('')
  const [zoomToken, setZoomToken] = useState<string>('')
  const [zooomRefreshToken, setZooomRefreshToken] = useState<string>('')
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((res) => {
        setToken(res)

        setZoomToken(decodeJwt(res)['https://oauth.zoom.us/token'].accessToken)
        setZooomRefreshToken(
          decodeJwt(res)['https://oauth.zoom.us/token'].refreshToken
        )

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Name: user?.name, Email: user?.email }),
        }
        fetch('http://localhost:1323/user', requestOptions)
      })
    }
  }, [isAuthenticated])

  return (
    <div className="w-1/3 py-14 mt-10 mx-auto bg-slate-300 flex justify-center flex-col">
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <img src={user?.picture} className="rounded-3xl mt-2 mx-auto" />
          <p className="fant-bold mt-4 mb-1 mx-auto">ZoomのToken</p>
          <p className="font-thin mx-10" style={{ overflowWrap: 'break-word' }}>
            {zoomToken}
          </p>
          <p className="fant-bold mt-4 mb-1 mx-auto">ZoomのRefreshToken</p>
          <p className="font-thin mx-10" style={{ overflowWrap: 'break-word' }}>
            {zooomRefreshToken}
          </p>
          <div className="mx-auto">
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Home
