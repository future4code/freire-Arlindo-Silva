import React from "react";
import styled from "styled-components";

const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

const InputsNew = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    padding: 5px;
    gap: 5px;

`

const Button = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px;
    margin: 5px;
    &:hover{
        background-color: #cacaca;
    }
`

export default class CreatUser extends React.Component{
    render() {
        return(
            <CreateContainer>                
                <div><Button onClick={() => {this.props.changeScreen("users")}}>Ir para lista de Usuarios</Button></div>
                <h3>Criar novo Usuario:</h3>
                <InputsNew>
                    <label htmlFor="nome">Nome:</label>
                    <input
                    value={this.props.name}
                    type="text" 
                    placeholder="digite nome"
                    onChange={this.props.onChangeName} 
                    />
                </InputsNew>
                <InputsNew>
                    <label htmlFor="email">Email:</label>
                    <input 
                    value={this.props.email}
                    type="email" 
                    placeholder="digite email"
                    onChange={this.props.onChangeEmail} 
                    />
                </InputsNew>
                <Button onClick={this.props.onClickSend}>Criar</Button>              
            </CreateContainer>
        );
    }
}