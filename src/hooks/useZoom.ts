import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  CreateZoomRequest,
  CreateZoomResponse,
} from '../codegen/zoom/v1/zoom_pb'
import { ZoomServiceClient } from '../codegen/zoom/v1/zoom_pb_service'
import { zoomState } from '../pages/state'
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

  const getMyZoomList = useCallback(async () => {
    if (zoomToken) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res: Response = await fetch(
        'http://localhost:1323/getMyZoomList?token=' + zoomToken,
        requestOptions
      )
      const body: GetMyZoomListResponseType = await res.json()
      return body
    }
  }, [zoomToken])

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
    getMyZoomList,
    createZoomResponse,
  }
}
