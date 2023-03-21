import React from 'react'
import renderer from 'react-test-renderer'
import { CustomTextInput } from 'src/components'

it('CustomTextInput renders correctly', () => {
  const tree = renderer.create(<CustomTextInput />).toJSON()
  expect(tree).toMatchSnapshot()
})
