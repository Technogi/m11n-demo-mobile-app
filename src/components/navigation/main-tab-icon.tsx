/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
const MainTabIcon = ({ iconName, color, size }: { iconName: string; color: string; size: number }): JSX.Element => (
  <View
    style={{
      ...mainStyle.circleStyle(35),
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{ marginLeft: moderateScale(1), marginBottom: moderateScale(1) }}>
      <View style={{ marginLeft: moderateScale(1), marginBottom: moderateScale(1) }}>
        <MaterialCommunityIcons name={iconName} color={color} size={size} />
      </View>
    </View>
  </View>
)

export default MainTabIcon
