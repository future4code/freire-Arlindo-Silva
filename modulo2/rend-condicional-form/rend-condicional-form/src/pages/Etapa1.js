import React from 'react'
import styled from 'styled-components';
import PerguntaAberta from './components/PerguntaAberta';
import PerguntaFechada from './components/PerguntaFechada';

const Prox = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 16px;
`

export default class Etapa1 extends React.Component {
     
    render(){
      return (
        <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
        <PerguntaAberta pergunta={"1. Qual a sua idade?"}/>
        <PerguntaAberta pergunta={"1. Qual o seu email?"}/>
        <PerguntaFechada 
        pergunta={"4. Qual sua escolaridade?"} 
        opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        aoSelecionar={this.props.onSelect}
        />
        <Prox onClick={this.props.aoClicar}>Próxima Etapa</Prox>
        </div>
      );
    }    	
  }
  