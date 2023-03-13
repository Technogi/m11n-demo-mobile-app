import { useCallback, useState } from 'react'
import { Auth } from 'aws-amplify'
import { ISignUpResult } from 'amazon-cognito-identity-js'
import { SetterOrUpdater } from 'recoil'

import { promiseTryCatch, showToast } from 'src/utils/helpers'
import { errorHandler, ErrorType } from 'src/services/errors'
import { messages } from 'src/utils/constants'

import {
  ConfirmSignUpHook,
  ForgotPasswordHook,
  RegisterFormInputs,
  ResendSignUpHook,
  SignInHook,
  SignUpHook,
  UserLogin,
} from './types'

let userData: UserLogin

/**
 * Function used to set the user login data without using promises
 *
 * @export
 * @param {UserLogin} userLoginData
 */
export const setUserLoginData = (userLoginData: UserLogin): void => {
  userData = userLoginData
}

/**
 * Function used to get the user login data without using promises
 *
 * @export
 * @return {UserLogin}  {UserLogin}
 */
export const getUserLoginData = (): UserLogin => userData

const INITIAL_STATE_REGISTER: SignUpHook = {
  data: null,
  loading: false,
  error: false,
}

const INITIAL_STATE_CONFIRM_REGISTER: ConfirmSignUpHook = {
  data: null,
  loading: false,
  error: false,
}

const INITIAL_STATE_RESEND_REGISTER: ResendSignUpHook = {
  data: null,
  loading: false,
  error: false,
}

const INITIAL_STATE_LOGIN: SignInHook = {
  data: null,
  loading: false,
  error: false,
}

const INITIAL_STATE_FORGOT_PASSWORD: ForgotPasswordHook = {
  data: null,
  loading: false,
  error: false,
}

/**
 * Hook used to sign in with phone number and password.
 *
 * @export
 * @return {*}  {{
 *   data: UserLogin
 *   loading: boolean
 *   error: boolean
 *   execute: (username: string, password: string) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useSignIn = (): {
  data: UserLogin
  loading: boolean
  error: boolean
  execute: (username: string, password: string) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<SignInHook>(INITIAL_STATE_LOGIN)
  const { data, loading, error } = state

  const execute = async (username: string, password: string): Promise<void> => {
    setState({ ...INITIAL_STATE_LOGIN, loading: true })

    const [user, errorSignIn] = await promiseTryCatch(Auth.signIn(username, password), 'error signIn: ', false)

    // console.log('signIn', JSON.stringify(user, null, 4))

    if (user) {
      setUserLoginData(user)
      setState({ ...INITIAL_STATE_LOGIN, data: user })
    } else {
      errorHandler(errorSignIn, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_LOGIN, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_LOGIN)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}

/**
 * Hook used to sign up (phone number, password).
 *
 * @export
 * @return {*}  {{
 *   data: ISignUpResult
 *   loading: boolean
 *   error: boolean
 *   execute: (registerFormInputs: RegisterFormInputs) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useSignUp = (): {
  data: ISignUpResult
  loading: boolean
  error: boolean
  execute: (registerFormInputs: RegisterFormInputs) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<SignUpHook>(INITIAL_STATE_REGISTER)
  const { data, loading, error } = state

  const execute = async (registerFormInputs: RegisterFormInputs): Promise<void> => {
    const { phoneNumber, password } = registerFormInputs

    setState({ ...INITIAL_STATE_REGISTER, loading: true })

    const [user, errorSignUp] = await promiseTryCatch(
      Auth.signUp({
        username: phoneNumber,
        password,
        attributes: {
          phone_number: phoneNumber,
        },
      }),
      'error signUp: ',
      false,
    )

    if (user) {
      setState({ ...INITIAL_STATE_REGISTER, data: user })
    } else {
      errorHandler(errorSignUp, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_REGISTER, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_REGISTER)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}

/**
 * Hook used to validate the user account with a code sent by SMS.
 *
 * @export
 * @return {*}  {{
 *   data: string
 *   loading: boolean
 *   error: boolean
 *   execute: (username: string, code: string) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useConfirmSignUp = (): {
  data: string
  loading: boolean
  error: boolean
  execute: (username: string, code: string) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<ConfirmSignUpHook>(INITIAL_STATE_CONFIRM_REGISTER)
  const { data, loading, error } = state

  const execute = async (username: string, code: string): Promise<void> => {
    setState({ ...INITIAL_STATE_CONFIRM_REGISTER, loading: true })

    const [user, errorConfirmSignUp] = await promiseTryCatch(
      Auth.confirmSignUp(username, code),
      'error confirmSignUp: ',
      false,
    )

    if (user) {
      setState({ ...INITIAL_STATE_CONFIRM_REGISTER, data: user })
    } else {
      errorHandler(errorConfirmSignUp, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_CONFIRM_REGISTER, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_CONFIRM_REGISTER)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}

/**
 * Hook used to resend the SMS with the code to validate the user account.
 *
 * @export
 * @return {*}  {{
 *   data: string
 *   loading: boolean
 *   error: boolean
 *   execute: (username: string, code: string) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useResendSignUp = (): {
  data: string
  loading: boolean
  error: boolean
  execute: (username: string) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<ResendSignUpHook>(INITIAL_STATE_RESEND_REGISTER)
  const { data, loading, error } = state

  const execute = async (username: string): Promise<void> => {
    setState({ ...INITIAL_STATE_RESEND_REGISTER, loading: true })

    const [user, errorConfirmSignUp] = await promiseTryCatch(Auth.resendSignUp(username), 'error resendSignUp: ', false)

    // console.log('resendSignUp', JSON.stringify(user, null, 4))

    if (user) {
      setState({ ...INITIAL_STATE_RESEND_REGISTER, data: user })
    } else {
      errorHandler(errorConfirmSignUp, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_RESEND_REGISTER, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_RESEND_REGISTER)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}

/**
 * Function used to sign out.
 *
 * @export
 * @param {SetterOrUpdater<boolean>} setSignedIn recoil set state
 * @return {Promise<void>}  {Promise<void>}
 */
export const signOut = async (setSignedIn: SetterOrUpdater<boolean>): Promise<void> => {
  try {
    await Auth.signOut()
    setUserLoginData(null)
    setSignedIn(false)
  } catch (error) {
    errorHandler(error, 'error signOut: ')
    showToast(messages.API_ERROR)
  }
}

/**
 * Function used to identify if the user is already logged in.
 *
 * @export
 * @param {SetterOrUpdater<boolean>} setSignedIn recoil set state
 * @return {Promise<void>}  {Promise<void>}
 */
export const getAuthenticatedUser = async (setSignedIn: SetterOrUpdater<boolean>): Promise<void> => {
  try {
    const user: UserLogin = await Auth.currentAuthenticatedUser()
    // console.log('user', JSON.stringify(user, null, 4))
    setUserLoginData(user)
    setSignedIn(true)
  } catch (error) {
    setSignedIn(false)
  }
}

/**
 * Function used to navigate to main tabs (my health, goal, etc.) and hide register or login modals.
 *
 * @export
 * @param {SetterOrUpdater<boolean>} setSignedIn
 * @param {(showRegisterModal: boolean) => void} setShowRegisterModal
 * @return {Promise<void>}  {Promise<void>}
 */
export const showHomeTab = async (
  setSignedIn: SetterOrUpdater<boolean>,
  setShowRegisterModal: (showRegisterModal: boolean) => void,
): Promise<void> => {
  setShowRegisterModal(false)

  setTimeout(() => setSignedIn(true), 400)
}

/**
 * Hook used to reset password(verification code sent).
 *
 * @export
 * @return {*}  {{
 *   data: UserLogin
 *   loading: boolean
 *   error: boolean
 *   execute: (username: string) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useForgotPassword = (): {
  data: UserLogin
  loading: boolean
  error: boolean
  execute: (username: string) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<SignInHook>(INITIAL_STATE_LOGIN)
  const { data, loading, error } = state

  const execute = async (username: string): Promise<void> => {
    setState({ ...INITIAL_STATE_LOGIN, loading: true })

    const [user, errorSignIn] = await promiseTryCatch(Auth.forgotPassword(username), 'error forgotPassword: ', false)

    // console.log('signIn', JSON.stringify(user, null, 4))

    if (user) {
      setUserLoginData(user)
      setState({ ...INITIAL_STATE_LOGIN, data: user })
    } else {
      errorHandler(errorSignIn, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_LOGIN, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_LOGIN)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}

/**
 * Hook used to reset password confirm.
 *
 * @export
 * @return {*}  {{
 *   data: string
 *   loading: boolean
 *   error: boolean
 *   execute: (username: string, code: string, newPassword: string) => Promise<void>
 *   reset: () => void
 * }}
 */
export const useForgotPasswordSubmit = (): {
  data: string
  loading: boolean
  error: boolean
  execute: (username: string, code: string, newPassword: string) => Promise<void>
  reset: () => void
} => {
  const [state, setState] = useState<ForgotPasswordHook>(INITIAL_STATE_FORGOT_PASSWORD)
  const { data, loading, error } = state

  const execute = async (username: string, code: string, newPassword: string): Promise<void> => {
    setState({ ...INITIAL_STATE_FORGOT_PASSWORD, loading: true })

    const [user, errorSignIn] = await promiseTryCatch(
      Auth.forgotPasswordSubmit(username, code, newPassword),
      'error forgotPasswordSubmit: ',
      false,
    )

    if (user) {
      setState({ ...INITIAL_STATE_FORGOT_PASSWORD, data: user })
    } else {
      errorHandler(errorSignIn, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_FORGOT_PASSWORD, error: true })
    }
  }

  const reset = (): void => {
    setState(INITIAL_STATE_FORGOT_PASSWORD)
  }

  return { data, loading, error, execute: useCallback(execute, []), reset: useCallback(reset, []) }
}
