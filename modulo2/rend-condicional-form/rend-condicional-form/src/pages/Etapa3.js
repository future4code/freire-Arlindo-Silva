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
        resposta5: ""
    }

    aoResponder5 = (event) => {
        this.setState({resposta5: event.target.value})
    }

    aoClicar = () => {
        if (this.state.resposta5) {
            {this.props.aoClicar()}
        }else{
            alert("Preencha todos os campos")
        }
    }

    render(){
      return (
        <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <PerguntaAberta pergunta={"5. Porque você não terminou um curso de graduação?"} aoResponder={this.aoResponder5}/>
        <PerguntaFechada 
        pergunta={"6. Você fez algum curso complementar?"} 
        opcoes={[
            "Nenhum",
            "Curso Técnico",
            "Curso de Inglês"
          ]}/>
        <Prox onClick={this.aoClicar}>Próxima Etapa</Prox>
        </div>
      );
    }    	
  }
