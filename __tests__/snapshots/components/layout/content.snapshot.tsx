import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { Content } from 'src/components'

it('Content renders correctly', () => {
  const tree = renderer
    .create(
      <Content>
        <View />
      </Content>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
