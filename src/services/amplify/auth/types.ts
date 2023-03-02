import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js'

export enum AuthErrorName {
  NOT_AUTHORIZED = 'NotAuthorizedException',
  USER_NOT_FOUND = 'UserNotFoundException',
  INVALID_PARAMETER = 'InvalidParameterException',
  SESSION_NOT_FOUND = 'SessionNotFoundException',
  REFRESH_TOKEN = 'RefreshTokenException',
  CODE_MISMATCH = 'CodeMismatchException',
  USERNAME_EXISTS = 'UsernameExistsException',
  USER_NOT_CONFIRMED = 'UserNotConfirmedException',
  USER_LAMBDA_VALIDATION = 'UserLambdaValidationException',
  LIMIT_EXCEEDED = 'LimitExceededException',
}

export enum UserRole {
  SUPER_ADMIN = 'super-admin',
  ADMIN = 'admin',
  PROJECT_MANAGER = 'pm',
  STANDARD_USER = 'standard',
}

export enum AuthErrorMessage {
  NOT_AUTHORIZED = 'Incorrect email or mobile number',
  INVALID_PARAMETER = 'You must enter your data to be able to log in',
  SESSION_NOT_FOUND = 'User session not found',
  REFRESH_TOKEN = 'Error refreshing user token ',
  CODE_MISMATCH = 'Invalid code',
  USERNAME_EXISTS = 'The number is already registered',
  USER_NOT_CONFIRMED = 'The number has not been confirmed',
  USER_LAMBDA_VALIDATION = 'Invalid company code',
  NO_AVAILABLE_USERS_LEFT = '+El código excede el número de usuarios. Por favor contacta al área de R.H. de tu empresa para que te proporcione un nuevo código',
  LIMIT_EXCEEDED = 'You have reached the maximum number of attempts. Please try again in 15 minutes.',
}

export enum CognitoChallengeName {
  NEW_PASSWORD = 'NEW_PASSWORD_REQUIRED',
}

export type CognitoError = {
  __type: AuthErrorName
  message: string
}

export type UserLogin = {
  username: string
  signInUserSession: {
    accessToken: {
      jwtToken: string
      payload: {
        exp?: number
      }
    }
    idToken: {
      jwtToken: string
      payload: {
        exp?: number
        phone_number?: string
      }
    }
    refreshToken: {
      token: string
    }
  }
  getSignInUserSession: () => { refreshToken: { token: string } }
  // eslint-disable-next-line @typescript-eslint/ban-types
  refreshSession: (data: any, session: any) => {}
}

export type UserSession = {
  cognitoUser: CognitoUser
  userSession: CognitoUserSession
}

export enum LoginFormName {
  PHONE_NUMBER = 'phoneNumber',
  PASSWORD = 'password',
}

export enum RegisterFormName {
  PHONE_NUMBER = 'phoneNumber',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export type RegisterFormInputs = {
  [RegisterFormName.PHONE_NUMBER]: string
  [RegisterFormName.PASSWORD]: string
  [RegisterFormName.CONFIRM_PASSWORD]?: string
}

export type SignUpHook = {
  data?: ISignUpResult
  loading: boolean
  error: boolean
}

export type ConfirmSignUpHook = {
  data?: string
  loading: boolean
  error: boolean
}

export type ResendSignUpHook = {
  data?: string
  loading: boolean
  error: boolean
}

export type SignInHook = {
  data?: UserLogin
  loading: boolean
  error: boolean
}

export type ForgotPasswordHook = {
  data?: string
  loading: boolean
  error: boolean
}

export type SignedAgreements = {
  id: string
  content: string
  ref: string
}
