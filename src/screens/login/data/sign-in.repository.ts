import { UserLoginPromise } from '../models/login.model'
import { signIn } from './sign-in.data.source'

export const signInUser = async (email: string, password: string): UserLoginPromise => signIn(email, password)
