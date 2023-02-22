/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { theme } from 'src/styles'
import RootStack from 'src/navigation/root-stack.nav'
import { LocalizationCtx } from 'src/context/localization/localization.context'

const navTheme = DefaultTheme
navTheme.colors.background = theme.SCREEN_BACKGROUND_COLOR

function App(): JSX.Element {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.SCREEN_BACKGROUND_COLOR} />
      <LocalizationCtx>
        <RootStack />
      </LocalizationCtx>
    </NavigationContainer>
  )
}

export default App
