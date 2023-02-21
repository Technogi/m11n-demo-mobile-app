import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Controller } from 'react-hook-form'

import { mainStyle, theme } from 'src/styles'

import CustomTextInput from './custom-text-input'
import { TextInputFormProps } from './types'

/**
 * Component inherited from TextInput (React Native) that can be used for forms (React Hook Form)
 *
 * @param {TextInputFormProps} textInputFormProps name, control, rules, errors, etc.
 * @return {*}  {JSX.Element}
 */
const TextInputForm = (textInputFormProps: TextInputFormProps): JSX.Element => {
  const {
    containerStyle,
    inputStyle,
    errorPositionTop,
    errorComponent,
    name,
    errors,
    errorMessage,
    ...newTextInputFormProps
  } = textInputFormProps

  const { errorMessageStyle, errorMessagesTopStyle } = styles

  const ErrorLabels = (): JSX.Element => {
    if (errorMessage && errors[name]) {
      return (
        <Text
          style={
            errorPositionTop ? mainStyle.textSmStyle(errorMessagesTopStyle) : mainStyle.textSmStyle(errorMessageStyle)
          }
        >
          {errorMessage}
        </Text>
      )
    }

    if (errorComponent && errors[name]) {
      return errorComponent
    }

    if (!errorMessage && !errorComponent && errors[name]) {
      if (errors[name].type === 'required') {
        return (
          <Text
            style={
              errorPositionTop ? mainStyle.textSmStyle(errorMessagesTopStyle) : mainStyle.textSmStyle(errorMessageStyle)
            }
          >
            {errors[name]?.message === '' || !errors[name]?.message ? 'Field required' : errors[name]?.message}
          </Text>
        )
      }

      if (errors[name].type === 'pattern') {
        return (
          <Text
            style={
              errorPositionTop ? mainStyle.textSmStyle(errorMessagesTopStyle) : mainStyle.textSmStyle(errorMessageStyle)
            }
          >
            {errors[name]?.message === '' || !errors[name]?.message ? '' : errors[name]?.message}
          </Text>
        )
      }

      return null
    }

    return null
  }

  return (
    <View style={{ ...containerStyle }}>
      {errorPositionTop ? <ErrorLabels /> : null}
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            onBlur={onBlur}
            onChangeText={textValue => onChange(textValue)}
            value={value}
            returnKeyType="next"
            blurOnSubmit={false}
            containerStyle={{ borderColor: errors[name] ? 'red' : theme.GRAY_500, ...inputStyle }}
            {...newTextInputFormProps}
          />
        )}
        {...textInputFormProps}
      />
      {errorPositionTop ? null : <ErrorLabels />}
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessageStyle: {
    color: 'red',
    marginTop: 5,
  },
  errorMessagesTopStyle: {
    color: 'red',
    marginBottom: 5,
  },
})

export default TextInputForm
