import React from "react";
import EditUser from "./EditUser";
import styled from "styled-components";
import axios from "axios";

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    & p{
        margin: 5px;
    }
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
const RemoveButton = styled.button`
    background-color: #fa0000;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;
    &:hover{
        opacity: 80%;
    }

`

export default class UsersDetails extends React.Component{
    state = {
        edit: false,
        name: this.props.user.name,
        email: this.props.user.email,
        nameScreen: this.props.user.name,
        emailScreen: this.props.user.email
    }

    editUser = (id) => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, {
            headers: {
                Authorization: "arlindo-silva-freire"
            }
        }).then((resposta)=>{
            this.onClickEdit()
            this.setState({nameScreen: this.state.name, emailScreen: this.state.email})
            alert("Usuario Editado")
        }).catch((error) => {
            alert("Usuario nao editado por erro")
        })
    }

    onClickEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    onChangeEmail = (ev) => {
        this.setState({email: ev.target.value})
        console.log(ev.target.value);
    }

    onChangeName = (ev) => {
        this.setState({name: ev.target.value})
        console.log(ev.target.value);

    }


    render() {
        return(
            <UserContainer>
                <Button onClick={() => {this.props.changeScreen("users")}}>Voltar</Button>
                <p>Nome: {this.state.nameScreen}</p>
                <p>Email: {this.state.emailScreen}</p>
                <RemoveButton onClick={() => {this.props.onClickRemove(this.props.user.id)}}>Remover</RemoveButton>
                {this.state.edit ? (
                <UserContainer>
                    <EditUser 
                    onEditUser={this.onEditUser} 
                    onChangeName={this.onChangeName} 
                    onChangeEmail={this.onChangeEmail}
                    />
                    <Button onClick={() => {this.editUser(this.props.user.id)}}>Salvar</Button>
                </UserContainer>
                ) : <Button onClick={this.onClickEdit}>Editar usuario</Button>}
            </UserContainer>
            
        );
    }
}