import React from 'react'
import renderer from 'react-test-renderer'
import { Body } from 'src/components'

it('Body renders correctly', () => {
  const tree = renderer.create(<Body>Test Body Component</Body>).toJSON()
  expect(tree).toMatchSnapshot()
})
