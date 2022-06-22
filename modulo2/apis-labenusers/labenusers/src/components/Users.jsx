import React from "react";
import styled from "styled-components";

const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const Button = styled.button`
    font-size: 13px;
    padding: 3px 6px;
    font-weight: bold;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 20px;
    &:hover{
        background-color: #cacaca;
    }
    &:active{
        background-color: gray
    }

`

const UsuarioName = styled.label`
    border: 0;
    font-size: 18px;

`

const Usuario = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    &:hover{
        background-color: #cacaca;
        border-radius: 50px;
    }
    &:active{
        background-color: gray
    }
    & button{
        background-color: #fa0000;
        color: white;
        border: 1px solid black;
        border-radius: 10px;
        font-weight: bold;
    }
    & button:hover{
        opacity: 80%;
    }
`


export default class Users extends React.Component{
    render() {
        const usersMapeados = this.props.users.map(user =>{
            return (<div key={user.id}>
            <Usuario>
                <UsuarioName 
                onClick={() => {this.props.onClickUser(user.id)}}
                >{user.name}</UsuarioName>
                <button onClick={() => {this.props.onClickRemove(user.id)}}>X</button>
            </Usuario>
        </div>
            )
        })
        return(
            <UsersContainer>                
                <Button onClick={() => {this.props.changeScreen("create")}}>Voltar</Button>
                <div>
                    <input
                    id="search"
                    onChange={this.props.onChangeInputSearch}
                    value={this.props.inputSearch}                    
                    type="text"
                    placeholder="Digite o nome de cadastro"
                    />
                    <Button onClick={this.props.onClickSearch}>Pesquisar</Button>
                </div>
                <h3>Lista de Usuarios:</h3>
                {usersMapeados}
            </UsersContainer>
            
        );
    }
}