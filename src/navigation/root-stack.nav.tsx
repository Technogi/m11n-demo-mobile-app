import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import screens from 'src/screens'

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
  return (
    <RootStackNav.Navigator>
      <RootStackNav.Screen name={RootNavName.AUTH} component={AuthStackScreen} options={{ headerShown: false }} />
    </RootStackNav.Navigator>
  )
}

export default RootStack
