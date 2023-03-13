import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { mainStyle } from 'src/styles'

const { borderColor, ...newShadowStyle } = mainStyle.shadowCard

const styles = StyleSheet.create({
  toastContainer: {
    ...newShadowStyle,
    width: '90%',
    paddingRight: moderateScale(15),
    paddingVertical: moderateScale(15),
    borderRadius: 10,
    borderWidth: 1.5,
    flexDirection: 'row',
    marginBottom: moderateScale(30),
  },
  iconContainer: {
    flex: 0.12,
    justifyContent: 'center',
    paddingLeft: moderateScale(15),
  },
  textContainer: {
    flex: 0.88,
    justifyContent: 'center',
  },
  infoContainer: {
    paddingLeft: moderateScale(15),
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
})

export default styles
