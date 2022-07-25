import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

type LoginButtonProps = {
  login?: () => void
}

const LoginButton = (props: LoginButtonProps) => {
  const { login } = props
  const { loginWithPopup, isLoading } = useAuth0()

  return (
    <>
      {!isLoading ? (
        <button
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
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
