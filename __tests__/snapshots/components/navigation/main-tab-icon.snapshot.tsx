import React from 'react'
import renderer from 'react-test-renderer'
import { MainTabIcon } from 'src/components/navigation'

it('MainTabIcon renders correctly', () => {
  const tree = renderer.create(<MainTabIcon iconName="home" color="#000000" size={14} />).toJSON()
  expect(tree).toMatchSnapshot()
})
