import * as React from 'react'
import { mount, render } from 'enzyme'

import { Hello } from './Hello'

const Component = (
  <Hello
    compiler="Webpack 4"
    framework="React"
    transpiler="Babel 7"
    types="TypeScript"
  />
)

describe('<Hello />', () => {
  test('should render', () => {
    const tree = render(Component)
    expect(tree).toMatchSnapshot()
  })
  test('should have props', () => {
    const wrapper = mount(Component)
    const expected = {
      compiler: 'Webpack 4',
      framework: 'React',
      transpiler: 'Babel 7',
      types: 'TypeScript'
    }
    expect(wrapper.props()).toMatchObject(expected)
  })
})
