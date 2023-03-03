export const appEnvironment = {
  DEV: 'dev',
  PROD: 'production',
}

const currentEnvApi = appEnvironment.DEV

const urlApi = {
  DEV: 'https://api-m11n-demo.io.technogi.com.mx/',
  PROD: 'https://api-m11n-demo.io.technogi.com.mx/',
}

export const URL_INFO = 'https://webapp.m11n.technogi.com.mx/info'

export const API_BASE_URL = (): string => {
  let currentUrlApi = urlApi.PROD

  if (currentEnvApi === appEnvironment.DEV) currentUrlApi = urlApi.DEV

  return currentUrlApi
}
