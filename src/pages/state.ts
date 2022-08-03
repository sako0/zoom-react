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
