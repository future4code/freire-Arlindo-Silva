import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:2px
`

const User = styled.p`
    font-weight: bold;
`

export class Mensagem extends React.Component {
    render(){
      return (
          <Message>
              <User>{this.props.user}:</User>
              <p>{this.props.message}</p>
          </Message>
      )
    }
    
  }
  