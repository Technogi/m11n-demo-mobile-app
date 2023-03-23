import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { mainStyle, theme } from 'src/styles'
import { MainTabIcon } from 'src/components/navigation'
import { LocalizationContext } from 'src/context/localization/localization.context'

import HomeStackScreen from '../home/home-stack.nav'
import SalesStackScreen from '../sales/sales-stack.nav'
import { MainTabsNavName, MainTabsStackParamList } from './main-tabs.model'

const MainTab = createBottomTabNavigator<MainTabsStackParamList>()

/**
 * Bottom tabs: My Health, Goals, Q&A and Profile tabs
 *
 * @return {JSX.Element}  {JSX.Element}
 */
const MainTabsStack = (): JSX.Element => {
  const {
    translations: { tabs },
  } = useContext(LocalizationContext)

  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        ...mainStyle.bottomTabOptions(),
        tabBarIcon: ({ color }) => {
          let iconName
          const iconSize = theme.ICON_SIZE_XL

          switch (route.name) {
            case MainTabsNavName.SALES_TAB:
              iconName = 'trending-up'
              break

            default:
              iconName = 'home'
              break
          }

          return <MainTabIcon iconName={iconName} color={color} size={iconSize} />
        },
      })}
    >
      <MainTab.Screen
        name={MainTabsNavName.HOME_TAB}
        component={HomeStackScreen}
        options={{ tabBarLabel: tabs.home }}
      />
      <MainTab.Screen
        name={MainTabsNavName.SALES_TAB}
        component={SalesStackScreen}
        options={{ tabBarLabel: tabs.sales }}
      />
    </MainTab.Navigator>
  )
}

export default MainTabsStack
