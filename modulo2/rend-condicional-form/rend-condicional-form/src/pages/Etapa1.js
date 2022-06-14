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
    state = {
        resposta1: false,
        resposta2: false,
        resposta3: false,
        respostas: false
    }

    aoResponder1 = (event) => {
        this.setState({resposta1: event.target.value})
    }
    aoResponder2 = (event) => {
        this.setState({resposta2: event.target.value})
    }
    aoResponder3 = (event) => {
        this.setState({resposta3: event.target.value})
    }
    
    aoClicar = () =>{
        if(this.state.resposta1 && this.state.resposta2 && this.state.resposta3){
            {this.props.aoClicar()}
        }else{
            alert("Preencha todos os campos")
        }
    }

    render(){
      return (
        <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} aoResponder={this.aoResponder1}/>
        <PerguntaAberta pergunta={"2. Qual a sua idade?"} aoResponder={this.aoResponder2}/>
        <PerguntaAberta pergunta={"3. Qual o seu email?"} aoResponder={this.aoResponder3}/>
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
        <Prox onClick={this.aoClicar}>Próxima Etapa</Prox>
        {this.respondido}
        </div>
      );
    }    	
  }
  