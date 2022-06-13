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

    }
    render(){
      return (
        <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>    
        <PerguntaAberta pergunta={"5. Qual o curso?"}/>
        <PerguntaAberta pergunta={"5. Qual a unidade de ensino?"}/>
        <Prox onClick={this.props.aoClicar}>Próxima Etapa</Prox>
        </div>
      );
    }    	
  }
