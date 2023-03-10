import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { moderateScale } from 'react-native-size-matters'
import CircularProgress from 'react-native-circular-progress-indicator'
import { useNavigation } from '@react-navigation/native'

import { formatNumber } from 'src/utils/helpers'
import { mainStyle, theme } from 'src/styles'
import { LocalizationContext } from 'src/context/localization/localization.context'
import { Body, Caption, Card, PressableOpacity } from 'src/components'
import { SalesNavName, SalesNavProps } from 'src/navigation/sales/sales-stack.model'

import { Product } from '../models/product.model'

const ProductItem = ({ item }: { item: Product }): JSX.Element => {
  const { name, price, sales: productSales, total, performance, id } = item
  const { navigation } = { navigation: useNavigation() } as SalesNavProps

  const {
    translations: { sales },
  } = useContext(LocalizationContext)

  const { cardContainer } = styles

  const performanceFormatted = Math.floor(performance * 100)

  const getCircleColor = (value: number): string => {
    let color = '#fcc735'

    if (value < 0.3) color = '#fc6335'
    if (value > 0.7) color = '#34eb83'

    return color
  }

  return (
    <Card style={cardContainer}>
      <PressableOpacity
        containerStyle={{ flexDirection: 'row' }}
        onPress={() => navigation.navigate(SalesNavName.SALES_FORECASTS, { id, name })}
      >
        <View style={{ flex: 0.3, alignItems: 'center' }}>
          <CircularProgress
            value={performanceFormatted}
            radius={moderateScale(35)}
            progressValueColor={theme.BODY_TEXT_COLOR}
            progressValueStyle={mainStyle.textLgStyle()}
            activeStrokeColor={getCircleColor(performance)}
            inActiveStrokeColor={getCircleColor(performance)}
            inActiveStrokeOpacity={0.2}
          />
          <Caption bold style={{ textAlign: 'center', marginTop: moderateScale(5) }}>
            {sales.performance}
          </Caption>
        </View>

        <View style={{ flex: 0.7, paddingLeft: moderateScale(10), justifyContent: 'center' }}>
          <Body bold style={{ color: theme.PRIMARY_COLOR }}>
            {name}
          </Body>

          <Body style={{ marginTop: moderateScale(5) }}>
            <Body bold>{sales.price}: </Body>${formatNumber(Number(price.toFixed(2)))}
          </Body>

          <Body>
            <Body bold>{sales.noSales}: </Body>
            {formatNumber(productSales)}
          </Body>

          <Body>
            <Body bold>{sales.totalSold}: </Body>${formatNumber(Number(total.toFixed(2)))}
          </Body>
        </View>
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
