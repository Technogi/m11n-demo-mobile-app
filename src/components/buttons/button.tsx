import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { theme } from 'src/styles'

import Body from '../text/body'
import PressableOpacity from './pressable-opacity'
import { ButtonProps } from './types'

/**
 * Returns a button component with solid, outline or clear style.
 *
 * @param {ButtonProps} buttonProps title, type, textStyle, containerStyle, etc.
 * @return {*}  {JSX.Element}
 */
const Button = (buttonProps: ButtonProps): JSX.Element => {
  const {
    containerStyle,
    type = 'solid',
    textStyle,
    title,
    icon,
    iconContainerStyle,
    spinnerTitle,
    ...newButtonProps
  } = buttonProps
  const { buttonStyle, iconStyle } = styles

  const ButtonIcon = (): JSX.Element => {
    if (spinnerTitle) {
      return (
        <View style={{ ...iconStyle, ...iconContainerStyle }}>
          <ActivityIndicator size="small" color={type === 'solid' ? 'white' : theme.PRIMARY_COLOR} />
        </View>
      )
    }

    if (icon) return <View style={{ ...iconStyle, ...iconContainerStyle }}>{icon}</View>

    return null
  }

  const ButtonText = (): JSX.Element => (
    <Body
      bold={false}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={{
        textAlign: 'center',
        color: type === 'solid' ? theme.PRIMARY_TEXT_COLOR : theme.PRIMARY_COLOR,
        ...textStyle,
      }}
    >
      {spinnerTitle?.toUpperCase() ?? title?.toUpperCase()}
    </Body>
  )

  return (
    <PressableOpacity
      containerStyle={{
        backgroundColor: type === 'solid' ? theme.PRIMARY_COLOR : 'transparent',
        borderColor: theme.PRIMARY_COLOR,
        borderWidth: type === 'outline' ? 1 : 0,
        borderRadius: moderateScale(11),
        ...buttonStyle,
        ...containerStyle,
      }}
      pointerEvents={spinnerTitle ? 'none' : 'auto'}
      {...newButtonProps}
    >
      <ButtonIcon />
      <ButtonText />
    </PressableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    // padding: moderateScale(11),
    paddingHorizontal: moderateScale(15),
    height: moderateScale(35),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: moderateScale(5),
    // marginTop: moderateScale(5),
  },
})

export default Button
