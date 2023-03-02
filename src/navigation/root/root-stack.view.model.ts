import { useContext, useEffect } from 'react'

import { LocalizationContext } from 'src/context/localization/localization.context'
import { useIsSignIn } from 'src/recoil/auth'
import { getAuthenticatedUser } from 'src/services/amplify/auth'
import { LangType } from 'src/services/language'
import { isNotEmptyArray } from 'src/utils/helpers'

const useRootStackViewModel = (): { isSignedIn: boolean } => {
  const { translations } = useContext(LocalizationContext)
  const { setSignedIn, isSignedIn } = useIsSignIn()

  useEffect(() => {
    setDeviceLanguage()
    getAuthenticatedUser(setSignedIn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setDeviceLanguage = (): void => {
    const deviceLanguage = translations.getInterfaceLanguage()?.split('-')

    if (isNotEmptyArray(deviceLanguage)) {
      if (deviceLanguage[0] === LangType.ES) translations.setLanguage(LangType.ES)
      else translations.setLanguage(LangType.EN)
    } else translations.setLanguage(LangType.EN)
  }

  return {
    isSignedIn,
  }
}

export default useRootStackViewModel
