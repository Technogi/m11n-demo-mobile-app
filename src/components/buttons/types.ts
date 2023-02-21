import { PressableProps, ViewStyle, TextStyle } from 'react-native'

export interface CustomPressableProps extends PressableProps {
  containerStyle?: ViewStyle
  showOpacity?: boolean
}

export type ButtonProps = CustomPressableProps & {
  title: string
  type?: 'solid' | 'clear' | 'outline'
  textStyle?: TextStyle
  icon?: React.ReactNode // or React.ElementType
  iconContainerStyle?: ViewStyle
  spinnerTitle?: string
}
