/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import { translations } from 'src/services/language'
import { isNotEmptyArray } from 'src/utils/helpers'
import { CognitoError, AuthErrorName } from './types'

const {
  errors: { auth, generic },
} = translations

/**
 * Returns a cognito error message.
 *
 * @export
 * @param {string} error
 * @return {string}  {string}
 */
export const cognitoErrorHandler = (error: string): string => {
  let authErrorMessage = generic
  let cognitoError: CognitoError

  const errorArray = String(error)?.split(':')

  if (isNotEmptyArray(errorArray) && errorArray.length === 2) {
    const formattedErrorArray = errorArray.map(singleError => singleError?.trim())
    cognitoError = { __type: formattedErrorArray[0] as AuthErrorName, message: formattedErrorArray[1] }
  }

  // eslint-disable-next-line no-underscore-dangle
  switch (cognitoError?.__type) {
    case AuthErrorName.NOT_AUTHORIZED:
      authErrorMessage = auth.notAuthorized
      break

    case AuthErrorName.USER_NOT_FOUND:
      authErrorMessage = auth.notAuthorized
      break

    case AuthErrorName.INVALID_PARAMETER:
      authErrorMessage = auth.invalidParameter
      break

    case AuthErrorName.CODE_MISMATCH:
      authErrorMessage = auth.codeMismatch
      break

    case AuthErrorName.USERNAME_EXISTS:
      authErrorMessage = auth.usernameExists
      break

    case AuthErrorName.USER_NOT_CONFIRMED:
      authErrorMessage = auth.userNotConfirmed
      break

    case AuthErrorName.LIMIT_EXCEEDED:
      authErrorMessage = auth.limitExceeded
      break

    default:
      authErrorMessage = generic
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
