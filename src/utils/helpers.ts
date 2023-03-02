/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Alert, Linking } from 'react-native'
// import Toast, { ToastPosition } from 'react-native-toast-message'

import { errorHandler } from 'src/services/errors'
// import { ToastType } from 'src/components/common'

// import { theme } from 'src/styles'
import { deviceWidth } from './constants'

/**
 * Function used to validate if a variable is an array and if the array has a length greater than 0
 *
 * @export
 * @param {Array<any>} array
 * @returns {boolean} boolean
 */
export const isNotEmptyArray = (array: Array<any>): boolean => Array.isArray(array) && array.length > 0

/**
 * Function used to validate if a variable is an array and if the array has a length equal to 0
 *
 * @export
 * @param {Array<any>} array
 * @returns {boolean} boolean
 */
export const isEmptyArray = (array: Array<any>): boolean => Array.isArray(array) && array.length === 0

/**
 * Function used to generate a random id
 *
 * @export
 * @returns {string} id
 */
export const shortId = (): string => Math.random().toString(36).substring(2, 16)

/**
 * Function used to capitalize the first letter in a text
 *
 * @export
 * @param {string} text
 * @returns {string} text with the first capital letter
 */
export const capitalizeFirstLetter = (text: string): string => text?.charAt(0).toUpperCase() + text?.slice(1)

/**
 * Function used to capitalize the first letter every word in a text
 *
 * @export
 * @param {string} text
 * @returns {string} text with the first capital letter
 */
export const capitalizeEveryWord = (text: string): string => text?.replace(/(^|\s)\S/g, l => l.toUpperCase())

/**
 * Function used to get a responsive height for images that stretch across the width of the device screen
 *
 * @export
 * @param {number} imageWidth
 * @param {number} imageHeight
 * @param {number} [factor=1] parameter used to reduce vertical padding when the image is fit to the screen (default value: 1)
 * @returns {number} numeric value to be used with height property
 */
export const dynamicHeight = (imageWidth: number, imageHeight: number, factor = 1): number => {
  const ratio = deviceWidth / imageWidth

  return imageHeight * ratio * factor
}

/**
 * Function used to open a url using the default browser in the device
 *
 * @export
 * @param {string} url
 */
export const openLink = (url: string, errorMessageAlert?: string): void => {
  Linking.canOpenURL(url)
    .then(() => {
      Linking.openURL(url).catch(error => {
        errorHandler(error, 'Error openURL:')
        if (errorMessageAlert) okAlert(errorMessageAlert)
      })
    })
    .catch(error => {
      errorHandler(error, 'Error canOpenURL:')
      if (errorMessageAlert) okAlert(errorMessageAlert)
    })
}

/**
 * Function used to remove the whitespace from a text
 *
 * @export
 * @param {string} text
 * @returns {string} string without whitespace
 */
export const removeWhitespace = (text: string): string => {
  if (text) return String(text).replace(/\s/g, '')

  return ''
}

/**
 * Shows a toast message with styles based on success, info, warning or error.
 *
 * @export
 * @param {string} message
 * @param {(ToastType | 'error' | 'success' | 'info' | 'warning')} [type=ToastType.ERROR] default value: ToastType.ERROR
 * @param {string} [title]
 * @param {number} [durationInSeconds=4] default value: 4
 * @param {ToastPosition} [position='bottom'] default value: 'bottom'
 */
// export const showToast = (
//   message: string,
//   type: ToastType | 'error' | 'success' | 'info' | 'warning' = ToastType.ERROR,
//   title?: string,
//   durationInSeconds = 4,
//   position: ToastPosition = 'bottom',
// ): void => {
//   Toast.show({
//     type,
//     text1: title,
//     text2: message,
//     visibilityTime: durationInSeconds * 1000,
//     position,
//   })
// }

/**
 * Function used to show an alert with one button
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {() => void} onPress
 * @param {string} [buttonText='OK'] default value: OK
 */
export const okAlert = (message: string, title?: string, onPress?: () => void, buttonText = 'OK'): void => {
  Alert.alert(title, message, [{ text: buttonText, onPress }])
}

/**
 * Function used to show an alert confirm with two button
 *
 * @export
 * @param {string} message
 * @param {string} title
 * @param {() => void} onPress
 * @param {string} [labelOkButton='OK'] default value: OK
 * @param {string} [labelCancelButton='Cancel'] default value: Cancel
 */
export const alertMessage = (
  message: string,
  title?: string,
  onOkButton?: () => void,
  labelOkButton = 'OK',
  labelCancelButton = 'Cancel',
): void => {
  Alert.alert(title, message, [
    {
      text: labelCancelButton,
      onPress: () => {},
    },
    {
      text: labelOkButton,
      onPress: onOkButton,
    },
  ])
}

/**
 * Function used to validate if a value is a boolean
 *
 * @export
 * @param {boolean} value
 * @return {boolean}  {boolean}
 */
export const isBoolean = (value: boolean): boolean => typeof value === 'boolean'

/**
 * Function used to format currency strings
 *
 * @export
 * @param price
 * @returns
 */
export const formatPrice = (price: number): string => {
  const formattedPrice = `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} M.N.`

  return formattedPrice
}

/**
 * Wrap a promise with its respective try / catch avoiding handling these statements in the code.
 *
 * @export
 * @template T
 * @param {Promise<T>} promise generic promise
 * @param {string} [errorMessage='Error: '] message to show in console.error. Default value: Error:
 * @param {boolean} [consoleError=true] show or hide a console.error. Default value: true
 * @return {Promise<[T, any]>}  {Promise<[T, error]>}
 */
export const promiseTryCatch = async <T>(
  promise: Promise<T>,
  errorMessage = 'Error: ',
  consoleError = true,
): Promise<[T, any]> => {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    // console.log(JSON.stringify(error, null, 4))
    if (consoleError) errorHandler(error, errorMessage)
    return [null, error]
  }
}

/**
 * Shows an alert with open app settings option.
 *
 * @export
 * @param {string} message
 */
export const showPermissionAlert = (message: string): void => {
  Alert.alert(null, message, [
    {
      text: 'Cancel',
      onPress: () => {},
    },
    {
      text: 'Settings',
      onPress: () => Linking.openSettings(),
    },
  ])
}

/**
 * Check if the value is a JSON string.
 *
 * @export
 * @param {*} value
 * @return {boolean}  {boolean}
 */
export const isJsonString = (value: any): boolean => {
  let jsonParsed

  try {
    jsonParsed = JSON.parse(value)

    if (jsonParsed && typeof jsonParsed === 'object') return true
  } catch (e) {
    return false
  }

  return false
}

export const formatNumber = (number: number): string => {
  let formattedNumber = '0'

  if (number) formattedNumber = `${number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

  return formattedNumber
}
