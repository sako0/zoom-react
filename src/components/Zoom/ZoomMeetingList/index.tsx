import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { GetMyZoomListResponseType, useZoom } from '../../../hooks/useZoom'
import { zoomListState } from '../../../pages/state'

const ZoomMeetingList = () => {
  const { getZoomList } = useZoom()
  const zoomList = useRecoilValue(zoomListState)

  useEffect(() => {
    getZoomList()
  }, [getZoomList])

  useEffect(() => {
    console.log(zoomList)
  }, [zoomList])

  return (
    <div className="text-sm w-3/4 mx-auto mt-2 flex flex-col ">
      {zoomList &&
        zoomList.map((zoom) =>
          zoom.zoomMeetingList.map((zoomMeeting) => {
            const date = new Date(zoomMeeting.createdAt)
            const createdAt =
              date.getFullYear() +
              '/' +
              String(date.getMonth() + 1) +
              '/' +
              date.getDate() +
              ' ' +
              date.getHours() +
              ':' +
              date.getMinutes().toString().padStart(2, '0')

            return (
              <div key={zoomMeeting.id} className="flex justify-between my-2">
                <a
                  className=" text-blue-500"
                  target={'_blank'}
                  href={zoomMeeting.joinUrl}
                  rel="noreferrer"
                >
                  {zoomMeeting.topic}
                </a>
                <p className="float-right">{zoomMeeting.createdAt}</p>
              </div>
            )
          })
        )}
    </div>
  )
}

export default ZoomMeetingList
