import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { Card } from 'src/components'

it('Card renders correctly', () => {
  const tree = renderer
    .create(
      <Card>
        <View />
      </Card>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
