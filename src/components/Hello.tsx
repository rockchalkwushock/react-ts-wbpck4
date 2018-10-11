import * as React from 'react'
import styled from 'styled-components'

export interface HelloProps {
  compiler: string
  framework: string
  transpiler: string
  types: string
}

const P = styled.p`
  font-size: 2rem;
  color: magenta;
  text-decoration: underline;
`

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const { compiler, framework, transpiler, types } = this.props
    return (
      <P>
        Welcome to {framework} with {compiler}, {transpiler}, and {types}.
      </P>
    )
  }
}
