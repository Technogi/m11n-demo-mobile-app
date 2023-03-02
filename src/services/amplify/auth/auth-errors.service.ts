/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import { errorMessage } from 'src/services/errors'
import { isNotEmptyArray } from 'src/utils/helpers'
import { CognitoError, AuthErrorMessage, AuthErrorName } from './types'

/**
 * Returns a cognito error message.
 *
 * @export
 * @param {string} error
 * @return {string}  {string}
 */
export const cognitoErrorHandler = (error: string): string => {
  let authErrorMessage = errorMessage.DEFAULT
  let cognitoError: CognitoError

  const errorArray = String(error)?.split(':')

  if (isNotEmptyArray(errorArray) && errorArray.length === 2) {
    const formattedErrorArray = errorArray.map(singleError => singleError?.trim())
    cognitoError = { __type: formattedErrorArray[0] as AuthErrorName, message: formattedErrorArray[1] }
  }

  // eslint-disable-next-line no-underscore-dangle
  switch (cognitoError?.__type) {
    case AuthErrorName.NOT_AUTHORIZED:
      authErrorMessage = AuthErrorMessage.NOT_AUTHORIZED
      break

    case AuthErrorName.USER_NOT_FOUND:
      authErrorMessage = AuthErrorMessage.NOT_AUTHORIZED
      break

    case AuthErrorName.INVALID_PARAMETER:
      authErrorMessage = AuthErrorMessage.INVALID_PARAMETER
      break

    case AuthErrorName.CODE_MISMATCH:
      authErrorMessage = AuthErrorMessage.CODE_MISMATCH
      break

    case AuthErrorName.USERNAME_EXISTS:
      authErrorMessage = AuthErrorMessage.USERNAME_EXISTS
      break

    case AuthErrorName.USER_NOT_CONFIRMED:
      authErrorMessage = AuthErrorMessage.USER_NOT_CONFIRMED
      break

    case AuthErrorName.USER_LAMBDA_VALIDATION:
      if (cognitoError?.message.endsWith('NO_AVAILABLE_USERS_LEFT.')) {
        authErrorMessage = AuthErrorMessage.NO_AVAILABLE_USERS_LEFT
      } else {
        authErrorMessage = AuthErrorMessage.USER_LAMBDA_VALIDATION
      }
      break

    case AuthErrorName.LIMIT_EXCEEDED:
      authErrorMessage = AuthErrorMessage.LIMIT_EXCEEDED
      break

    default:
      authErrorMessage = errorMessage.DEFAULT
      break
  }

  return authErrorMessage
}

export class CognitoSessionError extends Error {
  constructor(message: string) {
    super(message)

    this.name = AuthErrorName.SESSION_NOT_FOUND
  }
}

export class RefreshTokenError extends Error {
  constructor(message: string) {
    super(message)

    this.name = AuthErrorName.REFRESH_TOKEN
  }
}
