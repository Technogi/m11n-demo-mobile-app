import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ScrollView, ActivityIndicator, View, RefreshControl } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import Modal from 'react-native-modal'
import Feather from 'react-native-vector-icons/Feather'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import { LineChart } from 'react-native-chart-kit'
import { moderateScale } from 'react-native-size-matters'

import { Body, Card, Container, Content, PressableOpacity, Subtitle, TitleHeader } from 'src/components'
import { SalesForecastsNavProps } from 'src/navigation/sales/sales-stack.model'
import { deviceWidth } from 'src/utils/constants'
import { formatNumber, isNotEmptyArray, promiseTryCatch } from 'src/utils/helpers'
import { apiGet } from 'src/services/api'
import { theme } from 'src/styles'
import { LocalizationContext } from 'src/context/localization/localization.context'

import styles from './styles'

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
  ({
    id,
    searchParams,
    months,
  }: {
    searchParams: SearchParams
    id: number
    months: Array<{ id: string; name: string }>
  }) =>
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
        searchParams?.m === 'monthly' ? months[new Date(val).getMonth()].id : new Date(val).getDate() + ''

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

  const [searchParams, setSearchParams] = useState<SearchParams>()

  const [currentPointIndex, setPointIndex] = useState<number>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [rangeIgnored, setRangeIgnored] = useState<number>(ByMonth)
  const [showModal, setModal] = useState(false)
  const [indexSelected, setIndexSelected] = useState(-1)

  const {
    translations: { salesForecasts, months },
  } = useContext(LocalizationContext)

  const { modalStyle, modalContainer, scrollContainer } = styles

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['forecast'],
    queryFn: fetchFunction({ searchParams, id, months }),
    enabled: false,
  })

  useEffect(() => {
    if (indexSelected > -1) getDailyRange()
    else getMonthlyRange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSelected])

  useEffect(() => {
    if (!isFetching) setRefreshing(false)
  }, [isFetching])

  useEffect(() => {
    if (searchParams) refetch()
  }, [refetch, searchParams])

  const getMonthlyRange = (): void => {
    const startDate = getStartDayCurrentMonth()
    const endDate = getEndDayCurrentMonth()
    setSearchParams({ s: startDate, e: endDate, m: 'monthly' })
  }

  const getDailyRange = (): void => {
    const startDate = getStartDailyMonth()
    const endDate = getEndDailyMonth()
    setSearchParams({ s: startDate, e: endDate, m: 'daily' })
  }

  const formatDateWithoutZ = (date: Date): string => {
    const splitDate = date.toISOString()?.split('T')

    if (isNotEmptyArray(splitDate)) return `${splitDate[0]}T00:00:00`
    return null
  }

  const getStartDayCurrentMonth = (): string => {
    const currentDate = new Date()

    currentDate.setDate(1)

    return formatDateWithoutZ(currentDate)
  }

  const getEndDayCurrentMonth = (): string => {
    const currentDate = new Date()
    currentDate.setMonth(11)

    currentDate.setDate(getDaysInMonth(currentDate))

    return formatDateWithoutZ(currentDate)
  }

  const getStartDailyMonth = (): string => {
    const currentDate = new Date()

    currentDate.setMonth(indexSelected)
    currentDate.setDate(1)

    return formatDateWithoutZ(currentDate)
  }

  const getEndDailyMonth = (): string => {
    const currentDate = new Date()

    currentDate.setMonth(indexSelected)
    currentDate.setDate(getDaysInMonth(currentDate))

    return formatDateWithoutZ(currentDate)
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectOption = (index: number): void => {
    setModal(false)
    setIndexSelected(index)
  }

  const MonthsModal = (): JSX.Element => (
    <Modal isVisible={showModal} onBackdropPress={() => setModal(false)} style={modalContainer}>
      <View style={modalStyle}>
        <View style={{ flexDirection: 'row', paddingHorizontal: moderateScale(20) }}>
          <View style={{ flex: 0.9, alignItems: 'center' }}>
            <Subtitle bold>{salesForecasts.selectOption}</Subtitle>
          </View>

          <PressableOpacity hitSlop={5} containerStyle={{ flex: 0.1 }} onPress={() => setModal(false)}>
            <Feather name="x" color={theme.PRIMARY_COLOR} size={theme.ICON_SIZE_XL} />
          </PressableOpacity>
        </View>

        <ScrollView contentContainerStyle={scrollContainer}>
          <PressableOpacity
            containerStyle={{ alignItems: 'center', marginTop: moderateScale(20) }}
            onPress={() => selectOption(-1)}
          >
            <Body>{salesForecasts.monthly}</Body>
          </PressableOpacity>

          {months?.map((month, index) => {
            if (index >= new Date().getMonth()) {
              return (
                <PressableOpacity
                  key={month.id}
                  containerStyle={{ alignItems: 'center', marginTop: moderateScale(20) }}
                  onPress={() => selectOption(index)}
                >
                  <Body>{month?.name}</Body>
                </PressableOpacity>
              )
            }

            return null
          })}
        </ScrollView>
      </View>
    </Modal>
  )

  const MonthSelect = (): JSX.Element => (
    <PressableOpacity
      containerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
      onPress={() => setModal(true)}
    >
      <View style={{ paddingRight: moderateScale(12) }}>
        <Subtitle>{indexSelected > -1 ? months[indexSelected]?.name : salesForecasts.monthly}</Subtitle>
      </View>

      <View style={{}}>
        <Feather name="chevron-down" color={theme.PRIMARY_COLOR} size={theme.ICON_SIZE_XL} />
      </View>
    </PressableOpacity>
  )

  return (
    <Container
      scrollProps={{
        contentContainerStyle: { flex: 0 },
        refreshControl: <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />,
      }}
    >
      <Content>
        <TitleHeader title={`${name} ${salesForecasts.title}`} navigation={navigation} />
        <MonthSelect />
        {!isFetching && data ? (
          <>
            <ScrollView horizontal contentContainerStyle={{ paddingVertical: moderateScale(15) }}>
              <LineChart
                data={{
                  labels: data?.map(item => {
                    const monthFound = months.find(month => month?.id === item?.name)

                    if (!monthFound) return item?.name
                    return monthFound.shortName
                  }),
                  legend: [
                    `10th ${salesForecasts.percentile}`,
                    `50th ${salesForecasts.percentile}`,
                    `90th ${salesForecasts.percentile}`,
                  ],
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
                <Body bold>{months.find(month => month.id === data[currentPointIndex].name)?.name}</Body>
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
        <MonthsModal />
      </Content>
    </Container>
  )
}

export default SalesForecastsScreen
