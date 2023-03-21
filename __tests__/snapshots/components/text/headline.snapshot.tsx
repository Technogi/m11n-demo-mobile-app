import React from 'react'
import renderer from 'react-test-renderer'
import { Headline } from 'src/components'

it('Headline renders correctly', () => {
  const tree = renderer.create(<Headline>Test Headline Component</Headline>).toJSON()
  expect(tree).toMatchSnapshot()
})
