import { signInUser } from '../data/sign-in.repository'
import { UserLoginPromise } from '../models/login.model'

const signInUseCase = async (email: string, password: string): UserLoginPromise => signInUser(email, password)

export default signInUseCase
