import * as React from 'react'
import { render } from 'react-testing-library'

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
    const { asFragment } = render(Component)
    expect(asFragment()).toMatchSnapshot()
  })
  test('should render correct text', () => {
    const { container } = render(Component)
    console.log(container.innerHTML)
    expect(container.innerHTML).toEqual(
      '<p>Welcome to React with Webpack 4, Babel 7, and TypeScript.</p>'
    )
  })
})
