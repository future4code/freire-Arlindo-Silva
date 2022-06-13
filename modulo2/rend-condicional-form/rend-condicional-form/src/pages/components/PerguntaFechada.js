import React from 'react'
 
export default class PerguntaFechada extends React.Component {
    state = {
        valorInput: ""
    }

    onSelect = (event) => {
        return event.target.value;
    }

    render(){
      return (
        <div>
        <p>{this.props.pergunta}</p>
        <select onChange={this.props.aoSelecionar}>
            {this.props.opcoes.map(opcao => <option value={opcao}>{opcao}</option>)}
        </select>
        </div>
      );
    }
}