import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum SalesNavName {
  SALES = 'Sales',
  SALES_FORECASTS = 'SalesForecasts',
}

export type SalesStackParamList = {
  [SalesNavName.SALES]: undefined
  [SalesNavName.SALES_FORECASTS]: { id: number; name: string }
}

export type SalesNavProps = NativeStackScreenProps<SalesStackParamList, SalesNavName.SALES>
export type SalesForecastsNavProps = NativeStackScreenProps<SalesStackParamList, SalesNavName.SALES_FORECASTS>
