import { UserLogin } from 'src/services/amplify/auth'

export enum LoginFormName {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type LoginForm = {
  [LoginFormName.EMAIL]: string
  [LoginFormName.PASSWORD]: string
}

export type UserLoginPromise = Promise<[UserLogin, any]>
