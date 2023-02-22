import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import screens from 'src/screens'
import { LocalizationContext } from 'src/context/localization/localization.context'
import { LangType } from 'src/services/language'
import { isNotEmptyArray } from 'src/utils/helpers'

import { RootNavName, RootStackParamList } from './types'
import AuthStackScreen from './auth-stack.nav'

const RootStackNav = createNativeStackNavigator<RootStackParamList>()

/**
 * Root Stack Navigator: MainTabs and Auth Stacks showed depending if the user is signed in.
 *
 * @returns {JSX.Element} JSX.Element
 */
// eslint-disable-next-line arrow-body-style
const RootStack = (): JSX.Element => {
  const { translations } = useContext(LocalizationContext)

  useEffect(() => {
    setDeviceLanguage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setDeviceLanguage = (): void => {
    const deviceLanguage = translations.getInterfaceLanguage()?.split('-')

    if (isNotEmptyArray(deviceLanguage)) {
      if (deviceLanguage[0] === LangType.ES) translations.setLanguage(LangType.ES)
      else translations.setLanguage(LangType.EN)
    } else translations.setLanguage(LangType.EN)
  }

  return (
    <RootStackNav.Navigator>
      <RootStackNav.Screen name={RootNavName.AUTH} component={AuthStackScreen} options={{ headerShown: false }} />
    </RootStackNav.Navigator>
  )
}

export default RootStack
