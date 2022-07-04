import React from "react";
import styled from "styled-components";

const UsersContainer = styled.div`
    color: #011a30;
    border-radius: 30px;
    width: 90vw;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    gap: 5px;
    padding-bottom: 20px;
    margin: 20px 0px;
`
const SearchContainer = styled.div`
    & input{
        width: 150px;
        padding: 2px;
    }
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

const UsuarioName = styled.label`
    border: 0;
    font-size: 16px;
    font-weight: 500;
`

const Usuario = styled.div`
    border-radius: 50px;
    width: 70vw;
    display: grid;
    grid-template-columns: 1fr 25px;
    justify-content: space-between;
    padding: 4px 8px;
    &:hover{
        background-color: #cacaca;
    }
    &:active{
        background-color: gray
    }
    & button{
        background-color: #fa0000;
        color: white;
        border: 0px solid black;
        border-radius: 10px;
        font-weight: bold;
    }
    & button:hover{
        opacity: 80%;
    }
`


export default class Users extends React.Component{
    render() {
        const usersMapeados = this.props.users
        .sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        .map(user =>{
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
                <SearchContainer>
                    <input
                    id="search"
                    onChange={this.props.onChangeInputSearch}
                    value={this.props.inputSearch}                    
                    type="text"
                    placeholder="Digite o nome"
                    />
                    <Button onClick={this.props.onClickSearch}>Pesquisar</Button>
                </SearchContainer>
                <h3>Lista de Usuarios:</h3>
                {usersMapeados}
            </UsersContainer>
            
        );
    }
}