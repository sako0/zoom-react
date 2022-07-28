import { useEffect, useState } from 'react'
import LoginButton from '../components/Auth/LoginButton'
import LogoutButton from '../components/Auth/LogoutButton'
import CreateZoomButton from '../components/Zoom/CreateZoomButton'
import JoinZoomButton from '../components/Zoom/JoinZoomButton'

import { useAuth } from '../hooks/useAuth'
import { useZoom } from '../hooks/useZoom'

const Home = () => {
  const { isAuthenticated, user, zoomToken, login } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      login()
    }
  }, [isAuthenticated, login])

  return (
    <div className="w-1/3 py-14 mt-10 mx-auto bg-slate-300 flex justify-center flex-col">
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <img src={user?.picture} className="rounded-3xl mt-2 mx-auto" />
          <CreateZoomButton />
          <p className="fant-bold mb-1 mx-auto">ZoomのToken</p>
          <textarea
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-80 w-4/5 mx-auto"
            style={{ overflowWrap: 'break-word' }}
            defaultValue={zoomToken}
            readOnly={true}
          ></textarea>
          <div className="mx-auto mt-10">
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Home
