import { StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

import { formatNumber } from 'src/utils/helpers'
import { theme } from 'src/styles'

import { Body, Card, PressableOpacity } from 'src/components'
import { Product } from '../models/product.model'

const ProductItem = ({ item }: { item: Product }): JSX.Element => {
  const { name, price, sales, total } = item
  const { cardContainer } = styles

  return (
    <Card style={cardContainer}>
      <PressableOpacity onPress={() => {}}>
        <Body bold style={{ color: theme.PRIMARY_COLOR }}>
          {name}
        </Body>

        <Body style={{ marginTop: moderateScale(5) }}>
          <Body bold>Price: </Body>${formatNumber(Number(price.toFixed(2)))}
        </Body>

        <Body>
          <Body bold>No. Sales: </Body>
          {formatNumber(sales)}
        </Body>

        <Body>
          <Body bold>Total Sold: </Body>${formatNumber(Number(total.toFixed(2)))}
        </Body>
      </PressableOpacity>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    padding: moderateScale(15),
    marginBottom: moderateScale(15),
  },
})

export default ProductItem
