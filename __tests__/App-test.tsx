/**
 * @format
 */

import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

// eslint-disable-next-line import/no-unresolved, import/extensions
import App from '../App'

// eslint-disable-next-line jest/expect-expect
it('renders correctly', () => {
  renderer.create(<App />)
})
