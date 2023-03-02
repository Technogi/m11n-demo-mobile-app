import { View } from 'react-native'
import React from 'react'

import { Button, Headline } from 'src/components'
import { signOut } from 'src/services/amplify/auth'
import { useIsSignIn } from 'src/recoil/auth'

// eslint-disable-next-line arrow-body-style
const HomeScreen = (): JSX.Element => {
  const { setSignedIn } = useIsSignIn()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Headline>Home Screen</Headline>
      <Button containerStyle={{ marginTop: 20 }} title="SIGN OUT" onPress={() => signOut(setSignedIn)} />
    </View>
  )
}

export default HomeScreen
