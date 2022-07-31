import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from './useAuth'

type createZoomResponseType = {
  id: number
  join_url: string
  password: string
  start_url: string
}

export type getMyZoomListResponseType = {
  meetings: {
    id: number
    join_url: string
    created_at: string
    start_time: string
    topic: string
  }[]
}

export const useZoom = () => {
  const { zoomToken } = useAuth()

  const createZoom = useCallback(async () => {
    if (zoomToken) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: zoomToken }),
      }
      const res: Response = await fetch(
        'http://localhost:1323/createZoom',
        requestOptions
      )
      const body: createZoomResponseType = await res.json()
      return body
    }
  }, [zoomToken])

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
      const body: getMyZoomListResponseType = await res.json()
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

  return {
    zoomToken,
    createZoom,
    getMyZoomList,
  }
}
