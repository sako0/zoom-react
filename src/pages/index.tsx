import { credentials } from '@grpc/grpc-js'
import { useCallback, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { CreateUserRequest } from '../codegen/user/v1/user_pb'
import { UserServiceClient } from '../codegen/user/v1/user_pb_service'
import LoginButton from '../components/Auth/LoginButton'
import LogoutButton from '../components/Auth/LogoutButton'
import CreateZoomButton from '../components/Zoom/CreateZoomButton'
import ZoomMeetingList from '../components/Zoom/ZoomMeetingList'

import { useAuth } from '../hooks/useAuth'

import { zoomUrlState } from './state'

const Home = () => {
  const { isAuthenticated, user, zoomToken, zoomRefreshToken } = useAuth()
  const zoomUrl = useRecoilValue(zoomUrlState)

  const createUser = useCallback(async () => {
    const client = new UserServiceClient('http://localhost:8080')
    const requestParam = new CreateUserRequest()
    if (
      user &&
      user.sub &&
      user.name &&
      user.email &&
      zoomToken &&
      zoomRefreshToken
    ) {
      requestParam.setAuth0Id(user.sub)
      requestParam.setName(user.name)
      requestParam.setEmail(user.email)
      requestParam.setZoomToken(zoomToken)
      requestParam.setZoomRefreshToken(zoomRefreshToken)
      const res = await client.createUser(requestParam, (err) => {
        console.log(err)
      })
      console.log(res)

      return res
    }
  }, [user, zoomRefreshToken, zoomToken])

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     login()
  //   }
  // }, [isAuthenticated, login])

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
          {zoomUrl.startUrl && (
            <button
              onClick={() => {
                window.open(zoomUrl.startUrl, '_blank')
              }}
              className=" py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-40 mx-auto my-1"
            >
              Zoomに参加
            </button>
          )}
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
