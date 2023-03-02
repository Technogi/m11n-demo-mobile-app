import Axios from 'axios'

import { API_BASE_URL } from '../api'

let baseUrlInterceptor: number

/**
 * Constant used to create an axios instance with default api url
 *
 * @const {AxiosInstance}
 */
export const httpAxios = Axios.create({
  baseURL: API_BASE_URL(),
})

/**
 * Function used to initialize axios interceptor with user token in headers request
 *
 * @export
 * @param {string} accessToken
 */
export const setAxiosRequestInterceptor = (accessToken: string): void => {
  baseUrlInterceptor = httpAxios.interceptors.request.use(
    async axiosConfig => {
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        axiosConfig.headers.Authorization = `Bearer ${accessToken}`
      }
      return axiosConfig
    },
    error => {
      Promise.reject(error)
    },
  )
}

/**
 * Function used to reset the axios interceptors (token in headers request)
 *
 * @export
 */
export const resetAxiosInterceptors = (): void => {
  httpAxios.interceptors.request.eject(baseUrlInterceptor)
  baseUrlInterceptor = null
}
