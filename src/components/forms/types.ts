import { FieldErrors, FieldValues } from 'react-hook-form'

export type ControllerErrorsProps<TFieldValues extends FieldValues = FieldValues> = {
  errors?: FieldErrors<TFieldValues>
  errorMessage?: string
}
