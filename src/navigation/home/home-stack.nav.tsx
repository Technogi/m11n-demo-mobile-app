import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import screens from 'src/screens'
import { HomeNavName, HomeStackParamList } from './home-stack.model'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

/**
 * Home Stack Navigator: login and sign up screens
 *
 * @returns {JSX.Element} JSX.Element
 */
const HomeStackScreen = (): JSX.Element => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={HomeNavName.HOME} component={screens.HomeScreen} options={{ headerShown: false }} />
  </HomeStack.Navigator>
)

export default HomeStackScreen
