import React, { useEffect, useState } from 'react'
import { getMyZoomListResponseType, useZoom } from '../../../hooks/useZoom'

const ZoomMeetingList = () => {
  const { getMyZoomList } = useZoom()
  const [myZoomList, setMyZoomList] = useState<getMyZoomListResponseType>()

  useEffect(() => {
    getMyZoomList().then((res) => {
      setMyZoomList(res)
    })
  }, [getMyZoomList])

  return (
    <div className="text-sm w-3/4 mx-auto mt-2 flex flex-col ">
      {myZoomList?.meetings &&
        myZoomList.meetings.map((meeting) => {
          const date = new Date(meeting.created_at)
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
            <div key={meeting.id} className="flex justify-between my-2">
              <a
                className=" text-blue-500"
                target={'_blank'}
                href={meeting.join_url}
                rel="noreferrer"
              >
                {meeting.topic}
              </a>
              <p className="float-right">{createdAt}</p>
            </div>
          )
        })}
    </div>
  )
}

export default ZoomMeetingList
