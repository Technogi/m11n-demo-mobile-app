import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { Container } from 'src/components'

it('Container renders correctly', () => {
  const tree = renderer
    .create(
      <Container>
        <View />
      </Container>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
