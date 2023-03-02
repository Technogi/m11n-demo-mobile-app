import { getProducts } from '../data/product.repository'
import { ProductsPromise } from '../models/product.model'

const getProductsUseCase = async (): ProductsPromise => getProducts()

export default getProductsUseCase
