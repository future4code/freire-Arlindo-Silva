import React from 'react'
import styled from 'styled-components'
import {Mensagem} from './Mensagem'

const CampoDigitacao = styled.div`
    display: grid;
    grid-template-columns: 15% 70% 15%;
`

const MensagemContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 20px;
    min-height: 80vh;
    border: 1px solid black;

`
const Mensagens = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
`

export class SecaoMensagem extends React.Component {
    state = {
        mensagens: [],
        inputUsuario: "",
        inputMensagem: ""
    }

    onChangeUser = (event) => {
        this.setState({inputUsuario: event.target.value})
    }
    onChangeMessage = (event) => {
        this.setState({inputMensagem: event.target.value})
    }
    onClickSend = () => {
        const novaMensagem = { 
            user: this.state.inputUsuario,
            message: this.state.inputMensagem
        }
        const novaMensagens = [...this.state.mensagens, novaMensagem]
        this.setState({
            mensagens: novaMensagens,
            inputMensagem: ""
        })
        
    }


    render(){
        
        const mensagensRenderizadas = this.state.mensagens.map(mensagem =>{
            return(
                <Mensagem
                user={mensagem.user}
                message={mensagem.message}
              />
            )    
        })
        return (
            <MensagemContainer>
                <Mensagens>
                {mensagensRenderizadas}
                </Mensagens>
                <CampoDigitacao>
                    <input
                    placeholder='Usuario'
                    value={this.state.inputUsuario}
                    onChange={this.onChangeUser}
                    />
                    <input
                    placeholder='Mensagem'
                    value={this.state.inputMensagem}
                    onChange={this.onChangeMessage}
                    />
                    <button onClick={this.onClickSend}>Enviar</button>
                </CampoDigitacao>
            </MensagemContainer>
            
        )
    }
}
