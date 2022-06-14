import React from 'react'
import styled from 'styled-components'
import { SecaoMensagem } from './components/SecaoMensagem'

const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  width: 70vw;
  margin: 0 auto;
  display: grid;
  align-items: center;
`

export default class App extends React.Component {
  render(){
    return (
      <Body>
        <SecaoMensagem/>
      </Body>
    )
  }
  
}
