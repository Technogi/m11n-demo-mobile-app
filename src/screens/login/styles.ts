import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { theme } from 'src/styles'

/** @const {StyleSheet} */
const styles = StyleSheet.create({
  titleStyle: {
    marginTop: moderateScale(30),
    fontSize: theme.FONT_SIZE_3XL,
  },
  subtitleStyle: {
    marginTop: moderateScale(20),
    textAlign: 'center',
  },
  submitButtonStyle: {
    marginHorizontal: '20%',
    marginTop: moderateScale(20),
  },
})

export default styles
