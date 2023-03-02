import { Auth } from 'aws-amplify'

import { promiseTryCatch } from 'src/utils/helpers'
import { UserLoginPromise } from '../models/login.model'

export const signIn = async (email: string, password: string): UserLoginPromise =>
  promiseTryCatch(Auth.signIn(email, password), 'error signIn: ', false)
