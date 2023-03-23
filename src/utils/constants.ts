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

export const messages = {
  ACCOUNT_CREATED: 'Account created successfully.',
  API_ERROR: 'Parece que tuvimos un problema, por favor intenta de nuevo',
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
