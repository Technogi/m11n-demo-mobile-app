import React from 'react'
import renderer from 'react-test-renderer'
import { PressableOpacity } from 'src/components'

it('PressableOpacity renders correctly', () => {
  const tree = renderer.create(<PressableOpacity />).toJSON()
  expect(tree).toMatchSnapshot()
})
