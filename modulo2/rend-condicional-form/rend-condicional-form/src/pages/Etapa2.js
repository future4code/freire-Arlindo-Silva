import React from 'react'
import styled from 'styled-components';
import PerguntaAberta from './components/PerguntaAberta';

const Prox = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 16px;
`

export default class Etapa2 extends React.Component {
    state = {
        resposta5: "",
        resposta6: ""
    }

    aoResponder5 = (event) => {
        this.setState({resposta5: event.target.value})
    }
    aoResponder6 = (event) => {
        this.setState({resposta6: event.target.value})
    }

    aoClicar = () => {
        if (this.state.resposta5 && this.state.resposta6) {
            {this.props.aoClicar()}
        }else{
            alert("Preencha todos os campos")
        }
    }
    render(){
      return (
        <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>    
        <PerguntaAberta pergunta={"5. Qual o curso?"} aoResponder={this.aoResponder5} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} aoResponder={this.aoResponder6}/>
        <Prox onClick={this.aoClicar}>Próxima Etapa</Prox>
        </div>
      );
    }    	
  }
