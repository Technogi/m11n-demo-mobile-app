import React from 'react'
import { Text } from 'react-native'

import { mainStyle, theme } from 'src/styles'

import { FontType } from './types'

const Caption = (fontType: FontType): JSX.Element => {
  const { style, children, bold, ...textProps } = fontType

  return (
    <Text
      style={mainStyle.textSmStyle({
        fontFamily: bold ? theme.FONT_FAMILY_BOLD : theme.FONT_FAMILY_REGULAR,
        color: theme.BODY_TEXT_COLOR,
        ...style,
      })}
      {...textProps}
    >
      {children}
    </Text>
  )
}

export default Caption
