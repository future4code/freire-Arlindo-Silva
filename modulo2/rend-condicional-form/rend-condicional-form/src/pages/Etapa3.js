import React from 'react'
import styled from 'styled-components';
import PerguntaAberta from './components/PerguntaAberta';
import PerguntaFechada from './components/PerguntaFechada';

const Prox = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 16px;
`

export default class Etapa3 extends React.Component {
    state = {

    }
    render(){
      return (
        <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <PerguntaAberta pergunta={"5. Porque você não terminou um curso de graduação?"}/>
        <PerguntaFechada 
        pergunta={"4. Qual sua escolaridade?"} 
        opcoes={[
            "Nenhum",
            "Curso Técnico",
            "Curso de Inglês"
          ]}/>
        <Prox onClick={this.props.aoClicar}>Próxima Etapa</Prox>
        </div>
      );
    }    	
  }
