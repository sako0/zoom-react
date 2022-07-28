import React, { useCallback, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useZoom } from '../../../hooks/useZoom'

type JoinZoomButtonProps = {
  url: string
}

const JoinZoomButton = (props: JoinZoomButtonProps) => {
  const { url } = props
  return (
    <button
      className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-40 mx-auto my-10"
      onClick={() => {
        window.open(url, '_blank')
      }}
    >
      Zoom開始
    </button>
  )
}

export default JoinZoomButton
