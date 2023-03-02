import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { httpAxios } from '../axios'

export const apiGet = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
  httpAxios.get(url, { ...config, timeout: 15000 })

export const apiPost = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
  httpAxios.post(url, data, { ...config, timeout: 15000 })
