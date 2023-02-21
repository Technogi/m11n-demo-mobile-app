import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import screens from 'src/screens'

import { AuthNavName, AuthStackParamList } from './types'

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

/**
 * Auth Stack Navigator: login and sign up screens
 *
 * @returns {JSX.Element} JSX.Element
 */
const AuthStackScreen = (): JSX.Element => (
  <AuthStack.Navigator initialRouteName={AuthNavName.LOGIN}>
    <AuthStack.Screen name={AuthNavName.LOGIN} component={screens.LoginScreen} options={{ headerShown: false }} />
  </AuthStack.Navigator>
)

export default AuthStackScreen
