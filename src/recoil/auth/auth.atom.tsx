import { atom } from 'recoil'

// eslint-disable-next-line import/prefer-default-export
export const signedInState = atom<boolean>({
  key: 'signedInState',
  default: null,
})
