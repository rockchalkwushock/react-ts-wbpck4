import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
})

const root = document.getElementById('root') as HTMLElement

const render = (Component: React.SFC) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
