/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme } from 'src/styles'
import RootStack from 'src/navigation/root/root-stack.nav'
import { LocalizationCtx } from 'src/context/localization/localization.context'
import { initAmplify } from 'src/services/amplify'

const navTheme = DefaultTheme
navTheme.colors.background = theme.SCREEN_BACKGROUND_COLOR

const queryClient = new QueryClient()

function App(): JSX.Element {
  useEffect(() => {
    initAmplify()
  }, [])

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={navTheme}>
          <StatusBar barStyle="dark-content" backgroundColor={theme.SCREEN_BACKGROUND_COLOR} />
          <LocalizationCtx>
            <RootStack />
          </LocalizationCtx>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
