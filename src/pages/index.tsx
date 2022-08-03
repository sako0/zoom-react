import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import LoginButton from '../components/Auth/LoginButton'
import LogoutButton from '../components/Auth/LogoutButton'
import CreateZoomButton from '../components/Zoom/CreateZoomButton'
import JoinZoomButton from '../components/Zoom/JoinZoomButton'
import ZoomMeetingList from '../components/Zoom/ZoomMeetingList'
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
          {zoom.joinUrl ? (
            <JoinZoomButton url={zoom.startUrl} />
          ) : (
            <CreateZoomButton />
          )}
          <p className="fant-bold mb-1 mx-auto">ZoomのToken</p>
          <textarea
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-50 w-4/5 mx-auto"
            defaultValue={zoomToken}
            readOnly={true}
          />

          <p className="fant-bold mb-1 mx-auto">会議中のZoom</p>
          <ZoomMeetingList />
          <div className="mx-auto mt-10">
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Home
