import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import LoginButton from '../components/Auth/LoginButton'
import LogoutButton from '../components/Auth/LogoutButton'
import CreateZoomButton from '../components/Zoom/CreateZoomButton'
import { useAuth } from '../hooks/useAuth'
import { useZoom } from '../hooks/useZoom'
import { zoomState } from './state'

const Home = () => {
  const { isAuthenticated, user, zoomToken, zoomRefreshToken, createUser } =
    useAuth()
  const zoom = useRecoilValue(zoomState)

  useEffect(() => {
    if (isAuthenticated && user && zoomRefreshToken && zoomToken) {
      createUser()
    }
  }, [createUser, isAuthenticated, user, zoomRefreshToken, zoomToken])

  return (
    <div className="w-1/3 py-14 mx-auto bg-slate-300 flex justify-center flex-col h-screen">
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <img src={user?.picture} className="rounded-3xl mx-auto" />
          <CreateZoomButton />
          {/* {createZoomResponse?.getStartUrl() && ( */}
          <button
            onClick={() => {
              window.open(zoom.startUrl, '_blank')
            }}
            className=" py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-40 mx-auto my-1"
          >
            Zoomに参加
          </button>
          {/* )} */}
          <p className="fant-bold mb-1 mx-auto">ZoomのToken</p>
          <textarea
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-50 w-4/5 mx-auto"
            // style={{ overflowWrap: 'break-word' }}
            defaultValue={zoomToken}
            readOnly={true}
          ></textarea>
          {/* <ZoomMeetingList /> */}
          <p className="fant-bold mb-1 mx-auto">開催中のZoom</p>
          <div className="mx-auto mt-10">
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Home
