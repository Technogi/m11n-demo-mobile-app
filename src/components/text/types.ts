import { TextProps, TextStyle } from 'react-native'

export interface FontType extends TextProps {
  children: React.ReactNode
  style?: TextStyle
  bold?: boolean
}
