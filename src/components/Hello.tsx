import * as React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
  transpiler: string
  types: string
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const { compiler, framework, transpiler, types } = this.props
    return (
      <p>
        Welcome to {framework} with {compiler}, {transpiler}, and {types}.
      </p>
    )
  }
}
