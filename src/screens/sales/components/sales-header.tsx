import { useContext } from 'react'
import { View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { Headline } from 'src/components'
import { LocalizationContext } from 'src/context/localization/localization.context'

const SalesHeader = (): JSX.Element => {
  const {
    translations: { sales },
  } = useContext(LocalizationContext)

  return (
    <View style={{ alignItems: 'center' }}>
      <Headline style={{ marginVertical: moderateScale(20) }}>{sales.title}</Headline>
    </View>
  )
}

export default SalesHeader
