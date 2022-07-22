import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0()
  const [code, setCode] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (typeof router.query.code === 'string') {
      setCode(router.query.code)
    }
  }, [router.query.code])

  return (
    <>
      {!isAuthenticated && !isLoading ? (
        <button
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      ) : (
        <div className=" h-6" />
      )}
      {isAuthenticated && (
        <>
          <img src={user?.picture} className={' rounded-3xl'} />
          <p>{code}</p>
          <button
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            onClick={() => logout()}
          >
            Log OUT
          </button>
        </>
      )}
    </>
  )
}

export default LoginButton
