import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from './useAuth'

type createZoomResponse = {
  id: number
  join_url: string
  password: string
  start_url: string
}

export const useZoom = () => {
  const { zoomToken } = useAuth()
  const [zoomResponce, setZoomResponse] = useState<createZoomResponse>()
  //   const zoomResponce = useMemo(() => Object.assign({}, response), [response])

  const createZoom = useCallback(() => {
    if (zoomToken) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: zoomToken }),
      }
      fetch('http://localhost:1323/zoom', requestOptions).then((res) => {
        res.json().then((body: createZoomResponse) => {
          console.log(body)

          setZoomResponse(body)
        })
      })
    }
  }, [zoomToken])

  const openZoom = useCallback(() => {
    if (zoomResponce && zoomResponce.start_url) {
      window.open(zoomResponce?.start_url, '_blank')
    }
  }, [zoomResponce])

  useEffect(() => {
    if (zoomResponce) {
      openZoom()
    }
  }, [openZoom, zoomResponce])

  return {
    zoomToken,
    createZoom,
    zoomResponce,
    openZoom,
  }
}
