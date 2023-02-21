import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

/**
 * Returns a card component.
 *
 * @param {({
 *   children?: JSX.Element | JSX.Element[]
 *   style?: ViewStyle
 * })} {
 *   children: child component,
 *   style: view style
 * }
 * @returns {JSX.Element} JSX.Element
 */
const Card = ({ children, style }: { children?: JSX.Element | JSX.Element[]; style?: ViewStyle }): JSX.Element => {
  const { viewStyle } = styles

  return <View style={{ ...viewStyle, ...style }}>{children}</View>
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: 60,
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
  },
})

export default Card
