/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
// import Feather from 'react-native-vector-icons/Feather'

import { mainStyle } from 'src/styles'

/**
 * Returns the icon used for tabs.
 *
 * @param {{
 *   iconName: string
 *   focused: boolean
 *   color: string
 *   size: number
 * }} {
 *   iconName,
 *   focused,
 *   color,
 *   size,
 * }
 * @return {JSX.Element}  {JSX.Element}
 */
const MainTabIcon = ({
  custom = false,
  iconName,
  color,
  size,
}: {
  iconName: string
  color: string
  size: number
  custom?: boolean
}): JSX.Element => (
  <View
    style={{
      ...mainStyle.circleStyle(35),
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{ marginLeft: moderateScale(1), marginBottom: moderateScale(1) }}>
      <View style={{ marginLeft: moderateScale(1), marginBottom: moderateScale(1) }}>
        {/* <Feather name={iconName} color={color} size={size} /> */}
      </View>
    </View>
  </View>
)

export default MainTabIcon
