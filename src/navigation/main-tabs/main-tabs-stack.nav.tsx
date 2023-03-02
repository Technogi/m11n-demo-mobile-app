import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { mainStyle } from 'src/styles'

import HomeStackScreen from '../home/home-stack.nav'
import { MainTabsNavName, MainTabsStackParamList } from './main-tabs.model'

const MainTab = createBottomTabNavigator<MainTabsStackParamList>()

/**
 * Bottom tabs: My Health, Goals, Q&A and Profile tabs
 *
 * @return {JSX.Element}  {JSX.Element}
 */
const MainTabsStack = (): JSX.Element => (
  <MainTab.Navigator
    screenOptions={({}) => ({
      ...mainStyle.bottomTabOptions(),
      // tabBarIcon: ({ color, size }) => {
      //   let iconName
      //   let iconSize = size
      //   let custom = false

      //   switch (route.name) {
      //     case MainTabsNavName.GOALS_TAB:
      //       iconName = 'award'
      //       break

      //     case MainTabsNavName.QA_TAB:
      //       custom = true
      //       iconName = 'qa'
      //       iconSize = theme.ICON_SIZE_LG
      //       break

      //     case MainTabsNavName.PROFILE_TAB:
      //       iconName = 'user'
      //       break

      //     default:
      //       iconName = 'activity'
      //       break
      //   }

      //   return <MainTabIcon custom={custom} iconName={iconName} color={color} size={iconSize} />
      // },
    })}
  >
    <MainTab.Screen name={MainTabsNavName.HOME_TAB} component={HomeStackScreen} options={{ tabBarLabel: 'Home' }} />
    <MainTab.Screen name={MainTabsNavName.SALES_TAB} component={HomeStackScreen} options={{ tabBarLabel: 'Sales' }} />
  </MainTab.Navigator>
)

export default MainTabsStack
