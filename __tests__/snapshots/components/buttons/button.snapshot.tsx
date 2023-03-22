import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'src/components'

it('Button renders correctly', () => {
  const tree = renderer.create(<Button title="Test" />).toJSON()
  expect(tree).toMatchSnapshot()
})
