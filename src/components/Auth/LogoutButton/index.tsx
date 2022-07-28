import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated && (
        <button
          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => logout()}
        >
          Log out
        </button>
      )}
    </>
  )
}

export default LogoutButton
