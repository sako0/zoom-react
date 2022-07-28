import { useAuth0 } from '@auth0/auth0-react'
import { useCallback, useEffect, useState } from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
  const { isAuthenticated, user, zoomToken, zooomRefreshToken, login } =
    useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      login()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
