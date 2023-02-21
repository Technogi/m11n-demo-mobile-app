import React from 'react'
import { Pressable } from 'react-native'

import { CustomPressableProps } from './types'

/**
 * Component inherited from Pressable (React Native) but with opacity applied when component is pressed.
 *
 * @param {CustomPressableProps} customPressableProps showOpacity, containerStyle, disabled and same props of Pressable component
 * @return {*}  {JSX.Element}
 */
const PressableOpacity = (customPressableProps: CustomPressableProps): JSX.Element => {
  const { containerStyle, showOpacity = true, disabled = false } = customPressableProps

  return (
    <Pressable
      // eslint-disable-next-line no-constant-condition
      style={({ pressed }) => [{ opacity: (showOpacity && pressed) || disabled ? 0.5 : 1, ...containerStyle }]}
      {...customPressableProps}
    />
  )
}

export default PressableOpacity
