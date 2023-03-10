import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { mainStyle } from 'src/styles'
import { deviceHeight, deviceWidth } from 'src/utils/constants'

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    ...mainStyle.modalContainerStyle(),
    width: deviceWidth * 0.75,
    minHeight: moderateScale(140),
    maxHeight: deviceHeight * 0.85,
    paddingTop: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(20),
  },
})

export default styles
