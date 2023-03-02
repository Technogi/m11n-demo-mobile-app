import { useEffect, useState } from 'react'
import { Control, FieldErrors, FieldValues, useForm, UseFormHandleSubmit } from 'react-hook-form'

import { useIsSignIn } from 'src/recoil/auth'
import { setUserLoginData, UserLogin } from 'src/services/amplify/auth'
import { promiseTryCatch } from 'src/utils/helpers'

import { LoginForm, LoginFormName, SignInHook } from './models/login.model'
import signInUseCase from './use-cases/sing-in.use.case'

const INITIAL_STATE_LOGIN: SignInHook = {
  data: null,
  loading: false,
  error: false,
}

const useLoginViewModel = (): {
  control: Control<FieldValues, any>
  fieldErrors: FieldErrors<LoginForm>
  handleSubmit: UseFormHandleSubmit<LoginForm>
  onSubmit: (formData: LoginForm) => void
  data: UserLogin
  loading: boolean
  error: boolean
} => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      [LoginFormName.EMAIL]: '',
      [LoginFormName.PASSWORD]: '',
    },
  })

  const [state, setState] = useState<SignInHook>(INITIAL_STATE_LOGIN)
  const { data, loading, error } = state

  const { setSignedIn } = useIsSignIn()

  useEffect(() => {
    if (data) {
      setSignedIn(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const onSubmit = (formData: LoginForm): void => {
    const { email, password } = formData

    promiseTryCatch(signIn(email, password), 'error signIn onSubmit: ', false)
  }

  const signIn = async (email: string, password: string): Promise<void> => {
    setState({ ...INITIAL_STATE_LOGIN, loading: true })

    const [user, errorSignInIgnored] = await signInUseCase(email, password)

    if (user) {
      setUserLoginData(user)
      setState({ ...INITIAL_STATE_LOGIN, data: user })
    } else {
      // errorHandler(errorSignIn, undefined, true, ErrorType.LOGIN)
      setState({ ...INITIAL_STATE_LOGIN, error: true })
    }
  }

  return {
    control: control as unknown as Control<FieldValues>,
    fieldErrors: errors,
    handleSubmit,
    onSubmit,
    data,
    loading,
    error,
  }
}

export default useLoginViewModel
