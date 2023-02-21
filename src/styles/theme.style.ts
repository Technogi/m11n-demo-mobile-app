import { DefaultTheme } from './types'

/**
 * Default theme for Deli Life Company (colors, company name, logo)
 */
export const defaultTheme: DefaultTheme = {
  PRIMARY_COLOR: '#1650C5',
  SECONDARY_COLOR: '#215E4B',
  PRIMARY_TEXT_COLOR: '#FFFFFF',
  SECONDARY_TEXT_COLOR: '#E4EEFF',
  // LOGO: require('src/assets/images/logo/main-logo.png'),
  // SECONDARY_LOGO: require('src/assets/images/logo/simple-logo.png'),
  COMPANY_NAME: 'Technogi',
  BODY_TEXT_COLOR: '#171717',
}

/**
 * Theme used to set the font size, font family, colors, icon size, logo, etc. for the app (depending on the theme of the company)
 */
const theme = {
  FONT_SIZE_2SM: 10,
  FONT_SIZE_SM: 12,
  FONT_SIZE_MD: 14,
  FONT_SIZE_LG: 16,
  FONT_SIZE_XL: 18,
  FONT_SIZE_2XL: 20,
  FONT_SIZE_3XL: 24,
  FONT_SIZE_4XL: 30,
  FONT_SIZE_5XL: 36,
  FONT_SIZE_6XL: 42,
  FONT_FAMILY_REGULAR: 'Inter-Regular',
  FONT_FAMILY_BOLD: 'Inter-Bold',
  ICON_SIZE_SM: 22,
  ICON_SIZE_MD: 24,
  ICON_SIZE_LG: 26,
  ICON_SIZE_XL: 30,
  ICON_SIZE_2XL: 34,
  ICON_SIZE_3XL: 36,
  ICON_SIZE_5XL: 40,
  ICON_SIZE_7XL: 44,
  ICON_SIZE_10XL: 50,
  ICON_SIZE_20XL: 60,
  ICON_SIZE_40XL: 80,
  PRIMARY_COLOR: defaultTheme.PRIMARY_COLOR,
  SECONDARY_COLOR: defaultTheme.SECONDARY_COLOR,
  PRIMARY_TEXT_COLOR: defaultTheme.PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR: defaultTheme.SECONDARY_TEXT_COLOR,
  BODY_TEXT_COLOR: defaultTheme.BODY_TEXT_COLOR,
  SUCCESS_COLOR: '#80C77E',
  INFO_COLOR: '#428DFC',
  WARNING_COLOR: '#F5BC6C',
  DANGER_COLOR: '#E63F3F',
  DELETE_COLOR: '#EF4747',
  SCREEN_BACKGROUND_COLOR: '#F3F5F8',
  TABS_BACKGROUND_COLOR: '#FCFCFC',
  HEADER_BACKGROUND_COLOR: '#D0E7F0',
  BORDER_COLOR: '#D5E9FC',
  GRAY: '#E0E0E0',
  GRAY_000: '#FBFBFB',
  GRAY_100: '#f8f9fa',
  GRAY_150: '#f1f3f4',
  GRAY_200: '#eee',
  GRAY_300: '#dee2e6',
  GRAY_400: '#ced4da',
  GRAY_500: '#bbbbbb',
  GRAY_525: '#a1a1a1',
  GRAY_550: '#969696',
  GRAY_600: '#666',
  GRAY_700: '#444',
  PLACEHOLDER: '#89A6C2',
  LOGO: defaultTheme.LOGO,
  SECONDARY_LOGO: defaultTheme.SECONDARY_LOGO,
  COMPANY_NAME: defaultTheme.COMPANY_NAME,
}

export default theme
