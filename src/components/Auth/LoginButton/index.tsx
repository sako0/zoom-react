import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
  const { loginWithPopup, isLoading } = useAuth0()

  return (
    <>
      {!isLoading ? (
        <button
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-28 mx-auto"
          onClick={() => loginWithPopup()}
        >
          Log In
        </button>
      ) : (
        <div className=" h-6" />
      )}
    </>
  )
}

export default LoginButton
