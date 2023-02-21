import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { ControllerProps } from 'react-hook-form'

import { ControllerErrorsProps } from '../types'

export interface CustomTextInputProps extends TextInputProps {
  containerStyle?: ViewStyle
  textInputStyle?: TextStyle
  inputRef?: React.LegacyRef<TextInput>
  errorPositionTop?: boolean
  errorComponent?: JSX.Element
}

export type TextInputFormProps = CustomTextInputProps &
  Partial<ControllerProps> &
  ControllerErrorsProps & { inputStyle?: ViewStyle }
