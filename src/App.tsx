import * as React from 'react'

import { Hello } from './components/Hello'

export const App: React.SFC = () => (
  <Hello
    compiler="Webpack 4"
    framework="React"
    transpiler="Babel 7"
    types="TypeScript"
  />
)
