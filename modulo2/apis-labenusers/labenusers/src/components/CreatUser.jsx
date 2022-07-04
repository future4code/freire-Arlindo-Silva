import React from "react";
import styled from "styled-components";

const CreateContainer = styled.div`
    color: #011a30;
    border-radius: 30px;
    width: 300px;
    background-color: aliceblue;
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
    font-size: 13px;
    padding: 3px 6px;
    font-weight: bold;
    background-color: #002f58;
    color: white;
    border: 1px solid #011a30;
    border-radius: 10px;
    margin: 10px;
    &:hover{
        background-color: #002f58b5;
    }
    &:active{
        background-color: #002f58;
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