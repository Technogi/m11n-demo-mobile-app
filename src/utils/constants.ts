import { Platform, Dimensions } from 'react-native'

export const platform = Platform.OS
export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
export const isAndroid = platform === 'android'
export const isIOS = platform === 'ios'
export const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTV &&
  (deviceHeight === 780 ||
    deviceWidth === 780 ||
    deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 844 ||
    deviceWidth === 844 ||
    deviceHeight === 896 ||
    deviceWidth === 896 ||
    deviceHeight === 926 ||
    deviceWidth === 926)

export const globalAny: any = global

// eslint-disable-next-line no-underscore-dangle
export const isDebugMode = globalAny.__REMOTEDEV__

/**
 * Valid that a number meets the minimum and maximum length of digits
 *
 * @param {*} min minimum number of digits
 * @param {*} max maximum number of digits
 * @returns {RegExp} Regex Expression (true / false)
 */
export const isNumberLength = (min: number, max: number): RegExp => new RegExp(`^[0-9]{${min},${max}}$`)
// Minimum six characters
export const passwordValidate = /^.{6,}$/
export const isLetterOrDot = /^[A-Za-zÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ. ]*$/
export const isEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Validate that the input text is a valid url
 *
 * @returns {RegExp} Regex Expression
 */
export const isUrlValid = new RegExp(
  '^(https?:\\/\\/)' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i',
)
/**
 * Valid that a string is URL
 *
 * @param {*} s textinput string
 * @returns {boolean} (true / false)
 */
export const isValidHttpUrl = (s: string): boolean => {
  let url
  try {
    url = new URL(s)
  } catch (e) {
    return false
  }
  return /https?/.test(url.protocol)
}

export const messages = {
  ACCOUNT_CREATED: 'Account created successfully.',
}

export const logoDimensions = {
  WIDTH: 800,
  HEIGHT: 800,
}

export const defaultImageDimensions = {
  WIDTH: deviceWidth * 0.4,
  HEIGHT: deviceWidth * 0.4,
}

export const GOOGLE_LOGO_DIMENSIONS = 240 * 0.12

export const storage = {
  LOGIN_DATA: 'LOGIN_DATA',
  APP_LANGUAGE: 'APP_LANGUAGE',
}

export const appEnvironment = {
  DEV: 'dev',
  QA: 'qa',
  PROD: 'prod',
}

export const getDayName = (date: Date): string => {
  const dayNameArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  return dayNameArray[date?.getDay() ?? 0]
}

export const getMonthName = (date: Date): string => {
  const monthNameArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  return monthNameArray[date?.getMonth() ?? 0]
}

export const formatNumber = (number: number): string => {
  let formattedNumber = '0'

  if (number) formattedNumber = `${number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

  return formattedNumber
}
