import React from 'react'
// import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'

import { Button, Container, Content, Headline } from 'src/components'

// import styles from './styles'

/**
 * Screen to show user welcome (register, login modal)
 *
 * @param {WelcomeFloScreen} WelcomeFloNavProps
 * @return {JSX.Element}  {JSX.Element}
 */
const LoginScreen = (): JSX.Element => {
  const HeaderSection = (): JSX.Element => (
    <>
      {/* <FastImage
        source={require('src/assets/images/logo/flo-logo-shadow.png')}
        style={logoStyle}
        resizeMode={FastImage.resizeMode.contain}
      /> */}

      <Headline bold style={{ marginTop: moderateScale(30) }}>
        POStats
      </Headline>
    </>
  )

  const ButtonsSection = (): JSX.Element => (
    <>
      <Button title="sing in" onPress={() => {}} />
    </>
  )

  return (
    <Container>
      <Content style={{ alignItems: 'center' }}>
        <HeaderSection />
        <ButtonsSection />
      </Content>
    </Container>
  )
}

export default LoginScreen
