import { PixelRatio, TextStyle, ViewStyle } from 'react-native'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { moderateScale } from 'react-native-size-matters'

import { deviceWidth, isAndroid, isIphoneX } from 'src/utils/constants'
import theme from './theme.style'

// ------------------------- MD Font Size -------------------------
const textMdStyle = (textStyle?: TextStyle): TextStyle => ({
  fontSize: moderateScale(theme.FONT_SIZE_MD),
  color: theme.BODY_TEXT_COLOR,
  fontFamily: theme.FONT_FAMILY_REGULAR,
  ...textStyle,
})

const textBoldMdStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontFamily: theme.FONT_FAMILY_BOLD,
  ...textStyle,
})

// ------------------------- SM Font Size -------------------------
const textSmStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_SM),
  ...textStyle,
})

const textBoldSmStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_SM),
  ...textStyle,
})

// ------------------------- LG Font Size -------------------------
const textLgStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_LG),
  ...textStyle,
})

const textBoldLgStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_LG),
  ...textStyle,
})

// ------------------------- XL Font Size -------------------------
const textXlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_XL),
  ...textStyle,
})

const textBoldXlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_XL),
  ...textStyle,
})

// ------------------------- 2XL Font Size -------------------------
const text2XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_2XL),
  ...textStyle,
})

const textBold2XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_2XL),
  ...textStyle,
})

// ------------------------- 3XL Font Size -------------------------
const text3XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_3XL),
  ...textStyle,
})

const textBold3XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_3XL),
  ...textStyle,
})

// ------------------------- 4XL Font Size -------------------------
const text4XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_4XL),
  ...textStyle,
})

const textBold4XlStyle = (textStyle?: TextStyle): TextStyle => ({
  ...textBoldMdStyle(),
  fontSize: moderateScale(theme.FONT_SIZE_4XL),
  ...textStyle,
})

const circleStyle = (circleDimension: number): { width: number; height: number; borderRadius: number } => ({
  width: circleDimension,
  height: circleDimension,
  borderRadius: circleDimension / 2,
})

const screenStyle = {
  flex: 1,
  backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
}

const centerButtonStyle: ViewStyle = {
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}

const tabStyle = {
  backgroundColor: theme.TABS_BACKGROUND_COLOR,
}

const shadowStyle = {
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  borderColor: '#ccc',
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 1.5,
  elevation: 3,
}

const shadowAndroidLevelStyle = {
  ...shadowStyle,
  borderWidth: 0.5,
  elevation: 2.5,
}

const shadowCard = isAndroid ? shadowAndroidLevelStyle : shadowStyle

const activeTabStyle = {
  ...circleStyle(8),
  backgroundColor: theme.PRIMARY_COLOR,
  marginTop: 2.5,
}

const separatorStyle = {
  borderBottomWidth: 0.5,
  borderColor: theme.GRAY_500,
  marginVertical: 10,
}

const modalContainerStyle = (): ViewStyle => ({
  width: deviceWidth * 0.9,
  backgroundColor: 'white',
  borderRadius: 10,
  // paddingVertical: moderateScale(20),
  // paddingHorizontal: moderateScale(20),
})

const iconProfileStyle: TextStyle = {
  alignSelf: 'center',
  fontSize: theme.ICON_SIZE_40XL,
  color: theme.GRAY_550,
}

// const headerBackOptions = (title: string): StackNavigationOptions => ({
//   headerTitle: null,
//   headerBackTitle: title,
//   headerTruncatedBackTitle: title,
//   headerBackTitleVisible: true,
//   headerTintColor: theme.SECONDARY_COLOR,
//   headerBackTitleStyle: {
//     paddingLeft: 5,
//     ...textLgStyle({ color: theme.SECONDARY_COLOR }),
//   },
//   headerStyle: {
//     borderBottomWidth: 1,
//     borderBottomColor: theme.GRAY_300,
//   },
// })

// const headerTabOptions = (title: string): StackNavigationOptions => ({
//   headerTitle: title,
//   headerTitleStyle: {
//     ...textMdStyle({ color: theme.SECONDARY_COLOR }),
//   },
//   headerStyle: {
//     borderBottomWidth: 1,
//     borderBottomColor: theme.GRAY_300,
//   },
//   headerTitleAlign: 'center',
// })

const bottomTabOptions = (): BottomTabNavigationOptions => ({
  lazy: false,
  headerShown: false,
  tabBarActiveTintColor: theme.PRIMARY_COLOR,
  tabBarInactiveTintColor: theme.BODY_TEXT_COLOR,
  // tabBarShowLabel: false,
  // allowFontScaling: false,
  tabBarLabelStyle: {
    fontSize: theme.FONT_SIZE_SM,
    fontFamily: theme.FONT_FAMILY_REGULAR,
    paddingBottom: 5,
  },
  tabBarIconStyle: {
    marginTop: 2.5,
  },
  tabBarStyle: {
    height: isIphoneX ? 95 : 60,
    backgroundColor: `${theme.GRAY_100}`,
  },
})

export default {
  circleStyle,
  screenStyle,
  tabStyle,
  shadowStyle,
  shadowAndroidLevelStyle,
  textMdStyle,
  textBoldMdStyle,
  textSmStyle,
  textBoldSmStyle,
  textLgStyle,
  textBoldLgStyle,
  textXlStyle,
  textBoldXlStyle,
  text2XlStyle,
  textBold2XlStyle,
  text3XlStyle,
  textBold3XlStyle,
  text4XlStyle,
  textBold4XlStyle,
  activeTabStyle,
  separatorStyle,
  shadowCard,
  modalContainerStyle,
  iconProfileStyle,
  centerButtonStyle,
  // headerBackOptions,
  // headerTabOptions,
  bottomTabOptions,
}
