import { apiGet } from 'src/services/api'

import { isNotEmptyArray, promiseTryCatch } from 'src/utils/helpers'

import { Product, ProductResponse } from '../models/product.model'

const getMaxSales = (items: Array<Product>): number =>
  items?.reduce((acc, { sales }) => {
    const val = sales
    return val > acc ? val : acc
  }, 0) || 1

export const getAll = async (): Promise<ProductResponse> => {
  const [response, error] = await promiseTryCatch(apiGet<ProductResponse>('sales'), 'error getAllProducts: ')

  if (response) {
    if (isNotEmptyArray(response?.data?.items)) {
      const maxSales = getMaxSales(response?.data?.items)

      const responseItemsFormatted =
        response?.data?.items
          ?.map(({ price, sales, ...props }) => ({
            ...props,
            price,
            sales,
            performance: Math.round((sales / maxSales) * 100) / 100,
            total: sales * price,
          }))
          ?.sort((a, b) => b.performance - a.performance) || []

      response.data.items = responseItemsFormatted
    }

    return Promise.resolve(response.data)
  }

  return Promise.reject(error)
}
