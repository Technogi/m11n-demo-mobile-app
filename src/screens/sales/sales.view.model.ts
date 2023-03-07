import { useCallback, useEffect, useState } from 'react'

import { InitialState } from 'src/models'
import { Product } from './models/product.model'
import getProductsUseCase from './use-cases/get-products.use.case'

const INITIAL_STATE_SALES: InitialState<Array<Product>> = {
  data: null,
  loading: false,
  error: false,
}

const useSalesViewModel = (): {
  state: InitialState<Array<Product>>
  refreshing: boolean
  onRefresh: () => void
} => {
  const [state, setState] = useState(INITIAL_STATE_SALES)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getProductList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProductList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getProductList = async (): Promise<void> => {
    setState({ ...INITIAL_STATE_SALES, loading: true })

    const [productData] = await getProductsUseCase()

    if (productData) {
      setState({ ...INITIAL_STATE_SALES, data: productData?.items })
    } else {
      setState({ ...INITIAL_STATE_SALES, error: true })
    }

    setRefreshing(false)
  }

  return {
    state,
    refreshing,
    onRefresh,
  }
}

export default useSalesViewModel
