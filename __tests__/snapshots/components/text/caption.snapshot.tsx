import React from 'react'
import renderer from 'react-test-renderer'
import { Caption } from 'src/components'

it('Caption renders correctly', () => {
  const tree = renderer.create(<Caption>Test Caption Component</Caption>).toJSON()
  expect(tree).toMatchSnapshot()
})
