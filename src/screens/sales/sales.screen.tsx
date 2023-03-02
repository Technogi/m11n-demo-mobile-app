import { SafeAreaView, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

import { isNotEmptyArray } from 'src/utils/helpers'
import { Body, Card } from 'src/components'

import useSalesViewModel from './sales.view.model'
import ProductList from './components/product-list'
import SalesHeader from './components/sales-header'
import styles from './styles'

// eslint-disable-next-line arrow-body-style
const SalesScreen = (): JSX.Element => {
  const { state } = useSalesViewModel()
  const { data } = state
  const { emptyCardContainer } = styles

  const SalesContent = (): JSX.Element => {
    if (isNotEmptyArray(data)) {
      return (
        <>
          <ProductList data={data} />
        </>
      )
    }

    return (
      <View style={{ paddingHorizontal: moderateScale(15) }}>
        <SalesHeader />
        <Card style={emptyCardContainer}>
          <Body>Empty list</Body>
        </Card>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <SalesContent />
    </SafeAreaView>
  )
}

export default SalesScreen
