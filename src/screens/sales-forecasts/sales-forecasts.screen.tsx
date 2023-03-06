import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Container, Content, TitleHeader } from 'src/components'
import { SalesForecastsNavProps } from 'src/navigation/sales/sales-stack.model'
import { Months } from 'src/utils/constants'
import { promiseTryCatch } from 'src/utils/helpers'
import { apiGet } from 'src/services/api'

type SearchParams = {
  s: string
  e: string
  m: 'daily' | 'monthly'
}

type ForecastItem = {
  Timestamp: string
  Value: number
}

type ForecastType = {
  p90: ForecastItem[]
  p50: ForecastItem[]
  p10: ForecastItem[]
}

type ForecastChartItem = {
  name?: string
  p90?: number
  p50?: number
  p10?: number
}

const ByMonth = -1

const fetchFunction =
  ({ id, searchParams }: { searchParams: SearchParams; id: number }) =>
  async () => {
    const params = new URLSearchParams(searchParams)

    const [response, error] = await promiseTryCatch(
      apiGet<ForecastType>(`sales/${id}/forecast?${params}`),
      'error getForecast: ',
    )

    if (response?.data) {
      const result: ForecastChartItem[] = []
      const { p10, p50, p90 }: ForecastType = response?.data

      const nameFn = (val: string): string =>
        searchParams?.m === 'monthly' ? Months[new Date(val).getMonth()] : new Date(val).getDate() + ''

      p10.forEach(({ Timestamp, Value }) => {
        const item = result.find(({ name }) => name === nameFn(Timestamp))
        if (item) item.p10 = Value
        else result.push({ name: nameFn(Timestamp), p10: Value })
      })

      p50.forEach(({ Timestamp, Value }) => {
        const item = result.find(({ name }) => name === nameFn(Timestamp))
        if (item) item.p50 = Value
        else result.push({ name: nameFn(Timestamp), p50: Value })
      })

      p90.forEach(({ Timestamp, Value }) => {
        const item = result.find(({ name }) => name === nameFn(Timestamp))
        if (item) item.p90 = Value
        else result.push({ name: nameFn(Timestamp), p90: Value })
      })

      return result
    }

    return Promise.reject(error)
  }

const SalesForecastsScreen = ({ route, navigation }: SalesForecastsNavProps): JSX.Element => {
  const { id, name } = route?.params
  const [searchParams, setSearchParamsIgnored] = useState<SearchParams>({
    s: '2023-03-01T00:00:00',
    e: '2023-12-01T00:00:00',
    m: 'monthly',
  })

  const [rangeIgnored, setRangeIgnored] = useState<number>(ByMonth)

  const {} = useQuery({
    queryKey: ['forecast'],
    queryFn: fetchFunction({ searchParams, id }),
    enabled: Boolean(id),
  })

  return (
    <Container scrollProps={{ contentContainerStyle: { flex: 1 } }}>
      <Content>
        <TitleHeader title={`${name} Sales Forecasts`} navigation={navigation} />
      </Content>
    </Container>
  )
}

export default SalesForecastsScreen
