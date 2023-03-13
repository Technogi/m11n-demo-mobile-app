import React from 'react'
import { View } from 'react-native'
import { ToastConfig } from 'react-native-toast-message'
import Feather from 'react-native-vector-icons/Feather'

import { theme } from 'src/styles'

import Body from '../text/body'
import styles from './styles'
import { ToastType } from './types'

const { toastContainer, iconContainer, textContainer, infoContainer } = styles

const ToastComponent = ({
  title,
  message,
  type = ToastType.ERROR,
}: {
  title: string
  message: string
  type?: ToastType | 'error' | 'success' | 'info' | 'warning'
}): JSX.Element => {
  let color: string
  let iconName: string

  switch (type) {
    case ToastType.SUCCESS:
      color = theme.SUCCESS_COLOR
      iconName = 'check-circle'
      break

    case ToastType.INFO:
      color = theme.PRIMARY_COLOR
      iconName = 'info'
      break

    case ToastType.WARNING:
      color = theme.WARNING_COLOR
      iconName = 'alert-triangle'
      break

    default:
      color = theme.DANGER_COLOR
      iconName = 'alert-circle'
      break
  }

  if (type === ToastType.INFO) {
    return (
      <View style={{ ...toastContainer, ...infoContainer }}>
        {title && <Body bold>{title}</Body>}
        <Body style={{ marginTop: title ? 10 : 0 }}>{message}</Body>
      </View>
    )
  }

  return (
    <View style={{ ...toastContainer, borderColor: color }}>
      <View style={iconContainer}>
        <Feather name={iconName} color={color} size={theme.ICON_SIZE_LG} />
      </View>

      <View style={textContainer}>
        {title && <Body bold>{title}</Body>}
        <Body style={{ marginTop: title ? 10 : 0 }}>{message}</Body>
      </View>
    </View>
  )
}
/**
 * Configuration used to show a toast based on success, error, info or warning.
 * ToastConfig properties: text1, text2
 *
 * @type {ToastConfig}
 */
const toastConfig: ToastConfig = {
  success: ({ text1: title, text2: message }): JSX.Element => (
    <ToastComponent title={title} message={message} type={ToastType.SUCCESS} />
  ),
  error: ({ text1: title, text2: message }): JSX.Element => <ToastComponent title={title} message={message} />,
  info: ({ text1: title, text2: message }): JSX.Element => (
    <ToastComponent title={title} message={message} type={ToastType.INFO} />
  ),
  warning: ({ text1: title, text2: message }): JSX.Element => (
    <ToastComponent title={title} message={message} type={ToastType.WARNING} />
  ),
}

export default toastConfig
