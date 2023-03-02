import { SetterOrUpdater, useRecoilState } from 'recoil'
import { signedInState } from '../auth.atom'

export const useIsSignIn = (): {
  isSignedIn: boolean
  setSignedIn: SetterOrUpdater<boolean>
} => {
  const [isSignedIn, setSignedIn] = useRecoilState(signedInState)

  return {
    isSignedIn,
    setSignedIn,
  }
}
