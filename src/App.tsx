import * as React from 'react'

import { Hello } from './components/Hello'
import { PokemonQuery } from './components/PokemonQuery'

export const App: React.SFC = () => (
  <div>
    <Hello
      compiler="Webpack 4"
      framework="React"
      transpiler="Babel 7"
      types="TypeScript"
    />
    <PokemonQuery />
  </div>
)
