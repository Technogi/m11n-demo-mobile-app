import React, { useContext } from 'react'
import { moderateScale } from 'react-native-size-matters'

import { Body, Button, Container, Content, LogoHeader, Subtitle } from 'src/components'
import { signOut } from 'src/services/amplify/auth'
import { useIsSignIn } from 'src/recoil/auth'
import { openLink } from 'src/utils/helpers'
import { URL_INFO } from 'src/services/api'
import { LocalizationContext } from 'src/context/localization/localization.context'

// eslint-disable-next-line arrow-body-style
const HomeScreen = (): JSX.Element => {
  const { setSignedIn } = useIsSignIn()

  const {
    translations: { home },
  } = useContext(LocalizationContext)

  return (
    <Container scrollProps={{ contentContainerStyle: { flex: 1 } }}>
      <Content style={{ alignItems: 'center', justifyContent: 'center' }}>
        <LogoHeader />

        <Subtitle>{home.title}</Subtitle>
        <Body style={{ textAlign: 'center', marginTop: moderateScale(10) }}>{home.subtitle}</Body>

        <Button
          containerStyle={{ marginTop: moderateScale(20), marginHorizontal: '20%' }}
          title={home.selectHereButton}
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
