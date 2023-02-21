import React from 'react'
import { View } from 'react-native'

/**
 * Returns a horizontal separator that can be used to give space between components.
 *
 * @param {{ space: number }} { space }
 * @return {JSX.Element}  {JSX.Element}
 */
const HorizontalSeparator = ({ space }: { space: number }): JSX.Element => (
  <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#939393', marginTop: space }} />
)

export default HorizontalSeparator
