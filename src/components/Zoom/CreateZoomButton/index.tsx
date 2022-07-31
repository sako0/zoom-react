import React, { useCallback, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useAuth } from '../../../hooks/useAuth'
import { useZoom } from '../../../hooks/useZoom'
import { zoomUrlState } from '../../../pages/state'

const CreateZoomButton = () => {
  const { createZoom } = useZoom()
  const { isAuthenticated } = useAuth()
  const setZoomUrl = useSetRecoilState(zoomUrlState)

  return (
    <>
      {isAuthenticated && (
        <button
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-40 mx-auto my-5"
          onClick={() => {
            createZoom().then((res) => {
              if (res) {
                setZoomUrl({
                  joinUrl: res.join_url,
                  startUrl: res.start_url,
                })
              }
            })
          }}
        >
          Zoom作成
        </button>
      )}
    </>
  )
}

export default CreateZoomButton
