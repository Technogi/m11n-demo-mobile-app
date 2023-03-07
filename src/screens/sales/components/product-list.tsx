import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { Product } from '../models/product.model'
import ProductItem from './product-item'
import SalesHeader from './sales-header'

/**
 * Returns a shortened URLs list
 *
 * @param {{ data: Array<ShortenedUrl> }} { data }
 * @return {JSX.Element}  {JSX.Element}
 */
const ProductList = ({
  data,
  refreshing,
  onRefresh,
}: {
  data: Array<Product>
  refreshing: boolean
  onRefresh: () => void
}): JSX.Element => (
  <FlatList
    ListHeaderComponent={() => (
      <>
        <SalesHeader />
      </>
    )}
    renderItem={({ item }) => <ProductItem item={item} />}
    data={data}
    removeClippedSubviews={false}
    disableVirtualization
    keyExtractor={({ id }) => String(id)}
    contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
  />
)

export default ProductList
