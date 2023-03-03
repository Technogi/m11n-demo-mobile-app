import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { theme } from 'src/styles'

import Headline from './text/headline'

const LogoHeader = ({ containerStyle }: { containerStyle?: ViewStyle }): JSX.Element => {
  const { titleStyle, headlineStyle } = styles

  return (
    <View style={{ ...titleStyle, ...containerStyle }}>
      <MaterialIcons name="analytics" color={theme.PRIMARY_COLOR} size={theme.ICON_SIZE_7XL} />
      <Headline style={headlineStyle}>POStats</Headline>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headlineStyle: {
    fontSize: theme.FONT_SIZE_3XL,
    marginLeft: moderateScale(10),
  },
})

export default LogoHeader
