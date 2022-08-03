import { atom } from 'recoil'

export const zoomState = atom({
  key: 'zoomState',
  default: {
    id: -1,
    joinUrl: '',
    startUrl: '',
    createdAt: '',
    topic: '',
  },
})

export type ZoomListStateType = {
  zoomUserId: string
  zoomMeetingList: {
    id: number
    createdAt: string
    joinUrl: string
    startUrl: string
    topic: string
    hostId: string
  }[]
}[]

export const zoomListState = atom<ZoomListStateType>({
  key: 'zoomListState',
  default: [
    {
      zoomUserId: '',
      zoomMeetingList: [
        {
          id: -1,
          createdAt: '',
          joinUrl: '',
          startUrl: '',
          topic: '',
          hostId: '',
        },
      ],
    },
  ],
})
