import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import screens from 'src/screens'

import { SalesNavName, SalesStackParamList } from './sales-stack.model'

const SalesStack = createNativeStackNavigator<SalesStackParamList>()

/**
 * Sales Stack Navigator: login and sign up screens
 *
 * @returns {JSX.Element} JSX.Element
 */
const SalesStackScreen = (): JSX.Element => (
  <SalesStack.Navigator>
    <SalesStack.Screen name={SalesNavName.SALES} component={screens.SalesScreen} options={{ headerShown: false }} />
    <SalesStack.Screen
      name={SalesNavName.SALES_FORECASTS}
      component={screens.SalesForecastsScreen}
      options={{ headerShown: false }}
    />
  </SalesStack.Navigator>
)

export default SalesStackScreen
