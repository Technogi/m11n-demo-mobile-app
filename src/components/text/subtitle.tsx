import React from 'react'
import { Text } from 'react-native'

import { mainStyle, theme } from 'src/styles'

import { FontType } from './types'

/**
 * Returns a component that includes the visual text style for a subtitle.
 *
 * @param {FontType} fontType TextProps of react native, bold, children, etc.
 * @return {*}  {JSX.Element}
 */
const Subtitle = (fontType: FontType): JSX.Element => {
  const { style, children, bold, ...textProps } = fontType

  return (
    <Text
      style={mainStyle.textLgStyle({
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

export default Subtitle
