import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    pokemons(first: 10) {
      name
    }
  }
`

export const PokemonQuery: React.SFC = () => (
  <Query query={query}>
    {({ data, error, loading }) => {
      if (error) return <p>Error</p>
      if (loading) return <p>Loading</p>
      return data.pokemons.map(({ name }) => <p key={name}>{name}</p>)
    }}
  </Query>
)
