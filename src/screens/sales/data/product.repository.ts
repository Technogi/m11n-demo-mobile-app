import { promiseTryCatch } from 'src/utils/helpers'
import { ProductsPromise } from '../models/product.model'
import { getAll } from './product.data.source'

export const getProducts = async (): ProductsPromise => promiseTryCatch(getAll(), 'error getProducts: ', false)
