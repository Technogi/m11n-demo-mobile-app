export type Product = {
  id: number
  name: string
  price: number
  sales: number
  total?: number
  performance?: number
}

export type ProductResponse = {
  total: number
  items: Array<Product>
}

export type ProductsPromise = Promise<[ProductResponse, any]>
