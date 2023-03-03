import React from 'react'
import { View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { mainStyle } from 'src/styles'

/**
 * Returns a container component for wrapping screens
 *
 * @param {({
 *   style?: ViewStyle
 *   children: JSX.Element | JSX.Element[]
 * })} {
 *   style: view style
 *   children: child component,
 * }
 * @returns {JSX.Element} JSX.Element
 */
const Content = ({ style, children }: { style?: ViewStyle; children: JSX.Element | JSX.Element[] }): JSX.Element => (
  <View style={{ ...mainStyle.screenStyle, paddingHorizontal: moderateScale(15), ...style }}>{children}</View>
)

export default Content
