import React, { useContext } from 'react'
import { View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { Button, Container, Content, Headline, Subtitle, TextInputForm } from 'src/components'
import { LocalizationContext } from 'src/context/localization/localization.context'

import { LoginFormName } from './models/login.model'
import styles from './styles'
import useLoginViewModel from './login.view.model'

/**
 * Screen to show login (email and password inputs)
 *
 * @param {LoginScreen} LoginScreen
 * @return {JSX.Element}  {JSX.Element}
 */
const LoginScreen = (): JSX.Element => {
  const { fieldErrors, control, handleSubmit, onSubmit, loading } = useLoginViewModel()

  const {
    translations: {
      login,
      forms: { placeholders },
    },
  } = useContext(LocalizationContext)

  const { titleStyle, subtitleStyle, submitButtonStyle } = styles

  const HeaderSection = (): JSX.Element => (
    <View style={{ alignItems: 'center' }}>
      <Headline style={titleStyle}>POStats</Headline>

      <Subtitle style={subtitleStyle}>{login.subtitle} Technogi's M11N</Subtitle>
      <Subtitle style={{ textAlign: 'center' }}>Demo Mobile App</Subtitle>
    </View>
  )

  const formSection = (): JSX.Element => (
    <View style={{ marginTop: moderateScale(20) }}>
      <TextInputForm
        name={LoginFormName.EMAIL}
        placeholder={placeholders.email}
        control={control}
        errors={fieldErrors}
        keyboardType="email-address"
        autoCapitalize="none"
        rules={{ required: true }}
      />

      <TextInputForm
        name={LoginFormName.PASSWORD}
        placeholder={placeholders.password}
        control={control}
        errors={fieldErrors}
        // inputRef={phoneNumberRef}
        rules={{ required: true }}
        containerStyle={{ marginTop: moderateScale(20) }}
        secureTextEntry
        returnKeyType="done"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button
        containerStyle={submitButtonStyle}
        title={login.signInButton}
        onPress={handleSubmit(onSubmit)}
        spinnerTitle={loading ? login.signingInSpinner : null}
      />
    </View>
  )

  return (
    <Container>
      <Content style={{ paddingHorizontal: 20 }}>
        <HeaderSection />
        {formSection()}
      </Content>
    </Container>
  )
}

export default LoginScreen
