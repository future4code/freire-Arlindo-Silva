import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
`

const User = styled.p`
    font-weight: bold;
    margin: 5px;
`
const Texto = styled.p`
    margin: 5px;
    padding-left: 4px;
`

export class Mensagem extends React.Component {
    render(){
      return (
          <Message>
              <User>{this.props.user}:</User>
              <Texto>{this.props.message}</Texto>
          </Message>
      )
    }
    
  }
  