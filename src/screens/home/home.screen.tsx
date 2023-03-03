import React from 'react'
import { moderateScale } from 'react-native-size-matters'

import { Body, Button, Container, Content, LogoHeader, Subtitle } from 'src/components'
import { signOut } from 'src/services/amplify/auth'
import { useIsSignIn } from 'src/recoil/auth'
import { openLink } from 'src/utils/helpers'
import { URL_INFO } from 'src/services/api'

// eslint-disable-next-line arrow-body-style
const HomeScreen = (): JSX.Element => {
  const { setSignedIn } = useIsSignIn()

  return (
    <Container scrollProps={{ contentContainerStyle: { flex: 1 } }}>
      <Content style={{ alignItems: 'center', justifyContent: 'center' }}>
        <LogoHeader />

        <Subtitle>Your POS reaching the sky!</Subtitle>
        <Body style={{ textAlign: 'center', marginTop: moderateScale(10) }}>
          For more information on how this app was implemented
        </Body>

        <Button
          containerStyle={{ marginTop: moderateScale(20), marginHorizontal: '20%' }}
          title="SELECT HERE"
          onPress={() => openLink(URL_INFO)}
        />

        <Button
          containerStyle={{ marginTop: moderateScale(100), marginHorizontal: '20%' }}
          title="SIGN OUT"
          onPress={() => signOut(setSignedIn)}
        />
      </Content>
    </Container>
  )
}

export default HomeScreen
