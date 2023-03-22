import React from 'react'
import renderer from 'react-test-renderer'
import { Subtitle } from 'src/components'

it('Subtitle renders correctly', () => {
  const tree = renderer.create(<Subtitle>Test Subtitle Component</Subtitle>).toJSON()
  expect(tree).toMatchSnapshot()
})
