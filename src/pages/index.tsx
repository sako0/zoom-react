import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

const Home = () => {
  const [token, setToken] = useState<string>('')
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((res) => {
        setToken(res)
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
          <p
            className="font-thin my-4 mx-10"
            style={{ overflowWrap: 'break-word' }}
          >
            {token}
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
