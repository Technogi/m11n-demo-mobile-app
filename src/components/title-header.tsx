import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { theme } from 'src/styles'

import Headline from './text/headline'
import PressableOpacity from './buttons/pressable-opacity'

const TitleHeader = ({
  title,
  containerStyle,
  navigation,
}: {
  title: string
  containerStyle?: ViewStyle
  navigation: NativeStackNavigationProp<any, any>
}): JSX.Element => {
  const { titleStyle, headlineStyle } = styles

  return (
    <View style={{ ...titleStyle, ...containerStyle }}>
      <PressableOpacity hitSlop={5} containerStyle={{ flex: 0.1 }} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" color={theme.PRIMARY_COLOR} size={theme.ICON_SIZE_2XL} />
      </PressableOpacity>

      <View style={{ flex: 0.9 }}>
        <Headline style={headlineStyle}>{title}</Headline>
      </View>
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
    marginLeft: moderateScale(10),
  },
})

export default TitleHeader
