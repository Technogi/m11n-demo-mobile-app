import { Amplify } from 'aws-amplify'
import { amplifyCredentials } from './amplify.constants'

const { REGION, USER_POOL_ID, CLIENT_ID, IDENTITY_POOL_ID } = amplifyCredentials

export const initAmplify = (): void => {
  Amplify.configure({
    Auth: {
      region: REGION,
      identityPoolId: IDENTITY_POOL_ID,
      userPoolId: USER_POOL_ID,
      userPoolWebClientId: CLIENT_ID,
    },
  })
}
