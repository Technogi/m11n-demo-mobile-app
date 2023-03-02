/* eslint-disable @typescript-eslint/no-unused-vars */
import { isJsonString } from 'src/utils/helpers'

import { cognitoErrorHandler } from '../amplify/auth/auth-errors.service'
import { errorMessage, ErrorType } from './types'

/**
 * Function used to handle the system errors. This function can be used to show a error toast message
 *
 * @export
 * @param {*} error
 * @param {string} [message='Error: '] default value: 'Error: '
 * @param {boolean} [showToastMessage=false] default value: false
 * @param {ErrorType} [errorType=ErrorType.DEFAULT] default value: ErrorType.DEFAULT
 */
// eslint-disable-next-line import/prefer-default-export
export const errorHandler = (
  error: any,
  message = 'Error: ',
  showToastMessage = false,
  errorType = ErrorType.DEFAULT,
): void => {
  if (error?.response) console.error(message, JSON.stringify(error?.response, null, 4))
  else if (error?.request) console.error(message, JSON.stringify(error?.request, null, 4))
  else if (isJsonString(error)) console.error(message, JSON.stringify(error, null, 4))
  else console.error(message, error)

  if (showToastMessage) {
    let errorMessageToast: string
    const { DEFAULT, NO_DATA, GRAPHQL } = errorMessage

    switch (errorType) {
      case ErrorType.LOGIN:
        errorMessageToast = cognitoErrorHandler(error)
        break
      case ErrorType.NO_DATA:
        errorMessageToast = NO_DATA
        break
      case ErrorType.GRAPHQL:
        errorMessageToast = GRAPHQL
        break
      default:
        errorMessageToast = DEFAULT
        break
    }

    // showToast(errorMessageToast)
  }
}
