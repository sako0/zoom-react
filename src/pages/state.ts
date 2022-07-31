import { atom } from 'recoil'

export const zoomUrlState = atom({
  key: 'zoomUrlState',
  default: {
    joinUrl: '0',
    startUrl: '',
  },
})
