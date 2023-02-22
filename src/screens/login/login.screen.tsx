import React, { useContext } from 'react'
import { View } from 'react-native'
import { Control, FieldValues, useForm } from 'react-hook-form'
// import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'

import { Button, Container, Content, Headline, Subtitle, TextInputForm } from 'src/components'
import { theme } from 'src/styles'
import { LocalizationContext } from 'src/context/localization/localization.context'

import { LoginFormName } from './models/login.model'

// import styles from './styles'

/**
 * Screen to show user welcome (register, login modal)
 *
 * @param {WelcomeFloScreen} WelcomeFloNavProps
 * @return {JSX.Element}  {JSX.Element}
 */
const LoginScreen = (): JSX.Element => {
  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { url: '' } })

  const {
    translations: {
      login,
      forms: { placeholders },
    },
  } = useContext(LocalizationContext)

  const HeaderSection = (): JSX.Element => (
    <View style={{ alignItems: 'center' }}>
      {/* <FastImage
        source={require('src/assets/images/logo/flo-logo-shadow.png')}
        style={logoStyle}
        resizeMode={FastImage.resizeMode.contain}
      /> */}

      <Headline style={{ marginTop: moderateScale(30), fontSize: theme.FONT_SIZE_3XL }}>POStats</Headline>
    </View>
  )

  const formSection = (): JSX.Element => (
    <View style={{ marginVertical: moderateScale(20) }}>
      <TextInputForm
        name={LoginFormName.EMAIL}
        placeholder={placeholders.email}
        control={control as unknown as Control<FieldValues>}
        errors={errors}
        keyboardType="email-address"
        autoCapitalize="none"
        rules={{ required: true }}
      />

      <TextInputForm
        name={LoginFormName.PASSWORD}
        placeholder={placeholders.password}
        control={control as unknown as Control<FieldValues>}
        errors={errors}
        // inputRef={phoneNumberRef}
        rules={{ required: true }}
        containerStyle={{ marginTop: moderateScale(20) }}
        secureTextEntry
        returnKeyType="done"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )

  return (
    <Container>
      <Content style={{ paddingHorizontal: 20 }}>
        <HeaderSection />
        <Subtitle style={{ marginTop: moderateScale(20), textAlign: 'center' }}>
          {login.subtitle} Technogi's M11N
        </Subtitle>
        <Subtitle style={{ textAlign: 'center' }}>Demo Mobile App</Subtitle>
        {formSection()}
        <Button containerStyle={{ marginHorizontal: '20%' }} title={login.signInButton} onPress={() => {}} />
      </Content>
    </Container>
  )
}

export default LoginScreen
