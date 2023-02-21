import React from 'react'
import { Text } from 'react-native'

import { mainStyle, theme } from 'src/styles'

import { FontType } from './types'

const Headline = (fontType: FontType): JSX.Element => {
  const { style, children, bold = true, ...textProps } = fontType

  return (
    <Text
      style={mainStyle.textXlStyle({
        color: theme.BODY_TEXT_COLOR,
        fontFamily: bold ? theme.FONT_FAMILY_BOLD : theme.FONT_FAMILY_REGULAR,
        ...style,
      })}
      {...textProps}
    >
      {children}
    </Text>
  )
}

export default Headline
