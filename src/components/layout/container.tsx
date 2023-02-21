import React from 'react'
import { SafeAreaView, ScrollView, ScrollViewProps, ViewStyle } from 'react-native'

import { mainStyle } from 'src/styles'

/**
 * Returns a container component for wrapping screens with SafeAreaView and ScrollView included
 *
 * @param {({
 *   style?: ViewStyle
 *   children: JSX.Element | JSX.Element[]
 *   scrollProps?: ScrollViewProps
 * })} {
 *   style,
 *   children,
 *   scrollProps,
 * }
 * @return {JSX.Element}  {JSX.Element}
 */
const Container = ({
  style,
  children,
  scrollProps,
}: {
  style?: ViewStyle
  children: JSX.Element | JSX.Element[]
  scrollProps?: ScrollViewProps & { scrollRef?: React.LegacyRef<ScrollView> }
}): JSX.Element => (
  <SafeAreaView style={{ ...mainStyle.screenStyle, ...style }}>
    <ScrollView keyboardShouldPersistTaps="handled" ref={scrollProps?.scrollRef} {...scrollProps}>
      {children}
    </ScrollView>
  </SafeAreaView>
)

export default Container
