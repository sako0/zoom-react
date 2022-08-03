import { useCallback, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  CreateZoomRequest,
  GetZoomListRequest,
} from '../codegen/zoom/v1/zoom_pb'
import { ZoomServiceClient } from '../codegen/zoom/v1/zoom_pb_service'
import { zoomListState, ZoomListStateType, zoomState } from '../pages/state'
import { useAuth } from './useAuth'

export type GetMyZoomListResponseType = {
  meetings: ZoomResponseType[]
}
type ZoomResponseType = {
  id: number
  join_url: string
  created_at: string
  start_url: string
  topic: string
}

export const useZoom = () => {
  const { user, zoomToken } = useAuth()
  const [createZoomResponse, setCreateZoomResponse] =
    useState<ZoomResponseType>()
  const setZoom = useSetRecoilState(zoomState)
  const setZoomList = useSetRecoilState(zoomListState)

  const createZoom = useCallback(() => {
    const client = new ZoomServiceClient('http://localhost:8080')
    const requestParam = new CreateZoomRequest()
    if (user && user.sub) {
      requestParam.setAuth0Id(user.sub)
      client.createZoom(requestParam, (err, res) => {
        if (err) {
          console.log(err)
        }
        if (res) {
          console.log(res)
          const response: ZoomResponseType = {
            id: res.getId(),
            join_url: res.getJoinUrl(),
            created_at: res.getCreatedAt(),
            start_url: res.getStartUrl(),
            topic: res.getTopic(),
          }
          setCreateZoomResponse(response)
          setZoom({
            joinUrl: res.getJoinUrl(),
            startUrl: res.getStartUrl(),
            id: res.getId(),
            createdAt: res.getCreatedAt(),
            topic: res.getTopic(),
          })
        }
      })
    }
  }, [setZoom, user])

  const getZoomList = useCallback(() => {
    if (zoomToken) {
      const client = new ZoomServiceClient('http://localhost:8080')
      const requestParam = new GetZoomListRequest()
      requestParam.setOrganizationId(1)
      requestParam.setZoomToken(zoomToken)
      client.getZoomList(requestParam, (err, res) => {
        if (err) {
          console.log(err)
        }
        if (res) {
          const resList = res.getZoomListList()
          const formatResponseList: ZoomListStateType = resList.map((res) => {
            const meetingList = res.getZoomMeetingListList()
            const meetingInfoList = meetingList.map((meeting) => {
              return {
                id: meeting.getId(),
                createdAt: meeting.getCreatedAt(),
                joinUrl: meeting.getJoinUrl(),
                startUrl: meeting.getStartUrl(),
                topic: meeting.getTopic(),
                hostId: meeting.getHostId(),
              }
            })
            return {
              zoomUserId: res.getZoomUserId(),
              zoomMeetingList: meetingInfoList,
            }
          })
          setZoomList(formatResponseList)
        }
      })
    }
  }, [setZoomList, zoomToken])

  // const openZoom = useCallback(() => {
  //   if (zoomResponce && zoomResponce.start_url) {
  //     window.open(zoomResponce?.start_url, '_blank')
  //   }
  // }, [createZoom])

  // useEffect(() => {
  //   if (zoomResponce) {
  //     openZoom()
  //   }
  // }, [openZoom, zoomResponce])

  useEffect(() => {
    console.log(createZoomResponse)
  }, [createZoomResponse])

  return {
    zoomToken,
    createZoom,
    getZoomList,
    createZoomResponse,
  }
}
