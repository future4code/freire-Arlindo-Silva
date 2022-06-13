import React from 'react'


export default class PerguntaAberta extends React.Component {
    state = {

    }
    render(){
      return (
        <div>
        <p>{this.props.pergunta}</p>
        <input/>
        </div>
      );
    }
}