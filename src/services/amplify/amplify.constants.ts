// import Config from 'react-native-config'

import { appEnvironment } from 'src/utils/constants'

// const { API_ENVIRONMENT } = Config
const API_ENVIRONMENT = 'dev'

export type AmplifyConfig = {
  REGION: string
  USER_POOL_ID: string
  CLIENT_ID: string
  IDENTITY_POOL_ID: string
}

const amplifyDev: AmplifyConfig = {
  REGION: 'us-east-1',
  USER_POOL_ID: 'us-east-1_6hFveu8qJ',
  CLIENT_ID: '4734a5q071v1dkulnnaj1nvntt',
  IDENTITY_POOL_ID: 'us-east-1:e112b3e4-80b7-4f92-b9a7-9cfe8a4fe98d',
}

const amplifyProd: AmplifyConfig = {
  REGION: 'us-east-1',
  USER_POOL_ID: 'us-east-1_6hFveu8qJ',
  CLIENT_ID: '4734a5q071v1dkulnnaj1nvntt',
  IDENTITY_POOL_ID: 'us-east-1:e112b3e4-80b7-4f92-b9a7-9cfe8a4fe98d',
}

const getAmplifyConfig = (): AmplifyConfig => {
  if (API_ENVIRONMENT === appEnvironment.PROD) return amplifyProd
  return amplifyDev
}

export const amplifyCredentials = getAmplifyConfig()
