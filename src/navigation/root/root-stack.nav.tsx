import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { isBoolean } from 'src/utils/helpers'

import MainTabsStack from '../main-tabs/main-tabs-stack.nav'
import AuthStackScreen from '../auth/auth-stack.nav'
import { RootNavName, RootStackParamList } from './root-stack.model'
import useRootStackViewModel from './root-stack.view.model'

const RootStackNav = createNativeStackNavigator<RootStackParamList>()

/**
 * Root Stack Navigator: MainTabs and Auth Stacks showed depending if the user is signed in.
 *
 * @returns {JSX.Element} JSX.Element
 */
// eslint-disable-next-line arrow-body-style
const RootStack = (): JSX.Element => {
  const { isSignedIn } = useRootStackViewModel()

  if (!isBoolean(isSignedIn)) return null

  return (
    <RootStackNav.Navigator>
      {isSignedIn ? (
        <>
          <RootStackNav.Screen
            name={RootNavName.MAIN_TABS}
            component={MainTabsStack}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <RootStackNav.Screen name={RootNavName.AUTH} component={AuthStackScreen} options={{ headerShown: false }} />
      )}
    </RootStackNav.Navigator>
  )
}

export default RootStack
