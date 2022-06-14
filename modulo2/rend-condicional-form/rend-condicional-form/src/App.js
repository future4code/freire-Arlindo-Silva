import React from 'react'
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Etapa4 from "./pages/Etapa4";
import styled from "styled-components"

const Secao = styled.form`
  text-align: center;
`

export default class App extends React.Component {
  state = {
    etapa: 1,
    opcao: "Ensino médio incompleto",
    respostas: false
  }

  onSelect = (event) => {
    console.log(event.target.value);
    this.setState({opcao: event.target.value})
  }

  aoClicarBotao1 = () => {
    let novaEtapa
      switch (this.state.opcao) {
      case "Ensino superior incompleto":
        novaEtapa = 2
        this.setState({etapa: novaEtapa})
        break;
      case "Ensino superior completo":
        novaEtapa = 2
        this.setState({etapa: novaEtapa})
        break;
      case "Ensino médio incompleto":
        novaEtapa = 3
        this.setState({etapa: novaEtapa})
        break;
      case "Ensino médio completo":
        novaEtapa = 3
        this.setState({etapa: novaEtapa})
        break; 
      default:
        break;
      }
  }

  aoClicarBotao = () => {
    const novaEtapa = 4
    this.setState({etapa: novaEtapa})
  }

  respostas = () => {
    this.setState({respostas:true})
  }

  render(){
    let secao
    switch (this.state.etapa) {
      case 1: 
        secao = <Etapa1 aoClicar={this.aoClicarBotao1} onSelect={this.onSelect} respostas={this.respostas}/>
        break;
      case 2:
        secao = <Etapa2 aoClicar={this.aoClicarBotao}/>
        break;
      case 3:
        secao = <Etapa3 aoClicar={this.aoClicarBotao}/>
        break; 
      case 4:
        secao = <Etapa4/>
        break; 
      default:
        secao = <p>Nenhuma seção selecionada</p>;
        break;
    }
    return (
      <Secao>{secao}</Secao>
    )
  }    	
}

