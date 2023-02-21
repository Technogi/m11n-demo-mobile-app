import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { mainStyle, theme } from 'src/styles'

import { CustomTextInputProps } from './types'

/**
 * Component inherited from TextInput (React Native) with default style applied
 *
 * @param {CustomTextInputProps} customTextInputProps containerStyle, textInputStyle, inputRef, etc.
 * @return {*}  {JSX.Element}
 */
const CustomTextInput = (customTextInputProps: CustomTextInputProps): JSX.Element => {
  const { containerStyle, textInputStyle, inputRef } = customTextInputProps
  const { inputContainer, inputStyle } = styles

  return (
    <View style={{ ...inputContainer, ...containerStyle }}>
      <TextInput
        style={{ ...mainStyle.textLgStyle(inputStyle), ...textInputStyle }}
        placeholderTextColor={theme.GRAY_500}
        textInputStyle={mainStyle.textMdStyle()}
        ref={inputRef}
        selectionColor={theme.SECONDARY_COLOR}
        {...customTextInputProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.GRAY_500,
    borderRadius: 10,
  },
  inputStyle: {
    padding: moderateScale(11),
  },
})

export default CustomTextInput
