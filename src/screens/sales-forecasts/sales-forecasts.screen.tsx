import React, { useEffect, useState } from 'react'
import { ScrollView, ActivityIndicator, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { LineChart } from 'react-native-chart-kit'
import { moderateScale } from 'react-native-size-matters'
import { Body, Card, Container, Content, TitleHeader } from 'src/components'
import { SalesForecastsNavProps } from 'src/navigation/sales/sales-stack.model'
import { deviceWidth, Months, MonthsFullName } from 'src/utils/constants'
import { formatNumber, promiseTryCatch } from 'src/utils/helpers'
import { apiGet } from 'src/services/api'
import { theme } from 'src/styles'

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

const isNumeric = (value): boolean => /^-?\d+$/.test(value)

const SalesForecastsScreen = ({ route, navigation }: SalesForecastsNavProps): JSX.Element => {
  const { id, name } = route?.params
  const [searchParams, setSearchParamsIgnored] = useState<SearchParams>({
    s: '2023-03-01T00:00:00',
    e: '2023-12-01T00:00:00',
    m: 'monthly',
  })

  const [currentPointIndex, setPointIndex] = useState<number>(null)

  const [rangeIgnored, setRangeIgnored] = useState<number>(ByMonth)

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['forecast'],
    queryFn: fetchFunction({ searchParams, id }),
    enabled: Boolean(id),
  })

  useEffect(() => {
    refetch()
  }, [searchParams, refetch])

  return (
    <Container scrollProps={{ contentContainerStyle: { flex: 0 } }}>
      <Content>
        <TitleHeader title={`${name} Sales Forecasts`} navigation={navigation} />
        {!isFetching && data ? (
          <>
            <ScrollView horizontal contentContainerStyle={{ paddingVertical: moderateScale(15) }}>
              <LineChart
                data={{
                  labels: data?.map(item => item.name),
                  legend: ['10th Percentile', '50th Percentile', '90th Percentile'],
                  datasets: [
                    {
                      data: data?.map(item => item.p10),
                      color: (opacity = 1) => `rgba(255, 165, 0, ${opacity + 0.1})`, // optional
                      strokeWidth: 3, // optional
                    },
                    {
                      data: data?.map(item => item.p50),
                      color: (opacity = 1) => `rgba(136, 136, 136, ${opacity + 0.1})`, // optional
                      strokeWidth: 3, // optional
                    },
                    {
                      data: data?.map(item => item.p90),
                      color: (opacity = 1) => `rgba(0, 128, 0, ${opacity + 0.1})`, // optional
                      strokeWidth: 3, // optional
                    },
                  ],
                }}
                width={deviceWidth * (data.length * 0.2)}
                height={deviceWidth * 0.6}
                yAxisLabel="$"
                yAxisSuffix="K"
                yAxisInterval={1} // optional, defaults to 1
                withShadow={false}
                fromZero
                formatYLabel={yLabel => formatNumber(Number(Number(Number(yLabel) / 1000).toFixed(0)))}
                chartConfig={{
                  backgroundColor: 'white',
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: {
                    r: '5',
                  },
                }}
                bezier
                onDataPointClick={({ index }) => setPointIndex(index)}
                style={{ borderRadius: 10, width: deviceWidth * (data.length * 0.2) }}
              />
            </ScrollView>
            {isNumeric(currentPointIndex) && (
              <Card>
                <Body bold>{MonthsFullName.find(month => month.id === data[currentPointIndex].name)?.name}</Body>
                <Body style={{ marginTop: moderateScale(10), color: 'rgb(255, 165, 0)' }}>
                  p10: {formatNumber(Number(Number(Number(data[currentPointIndex].p10) / 1000).toFixed(0)))}K
                </Body>
                <Body style={{ color: 'rgb(136, 136, 136)' }}>
                  p50: {formatNumber(Number(Number(Number(data[currentPointIndex].p50) / 1000).toFixed(0)))}K
                </Body>
                <Body style={{ color: 'rgb(0, 128, 0)' }}>
                  p90: {formatNumber(Number(Number(Number(data[currentPointIndex].p90) / 1000).toFixed(0)))}K
                </Body>
              </Card>
            )}
          </>
        ) : (
          <View style={{ marginTop: moderateScale(20) }}>
            <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
          </View>
        )}
      </Content>
    </Container>
  )
}

export default SalesForecastsScreen
