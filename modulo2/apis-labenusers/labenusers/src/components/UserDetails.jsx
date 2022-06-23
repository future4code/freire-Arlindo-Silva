import React from "react";
import EditUser from "./EditUser";
import styled from "styled-components";
import axios from "axios";

const UserContainer = styled.div`
    margin: 0 auto;
    width: 300px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    & p{
        align-self: flex-start;
        margin: 0;
        font-size: 18px;
    }
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
const RemoveButton = styled.button`
    font-size: 13px;
    padding: 3px 6px;
    font-weight: bold;
    background-color: #fa0000;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
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
                <div>
                    
                    {this.state.edit ? (
                    <UserContainer>
                        <EditUser 
                        onEditUser={this.onEditUser} 
                        onChangeName={this.onChangeName} 
                        onChangeEmail={this.onChangeEmail}
                        />
                        <Button onClick={() => {this.editUser(this.props.user.id)}}>Salvar</Button>
                    </UserContainer>
                    ) : <div>
                            <Button onClick={this.onClickEdit}>Editar usuario</Button>
                            <RemoveButton onClick={() => {this.props.onClickRemove(this.props.user.id)}}>Deletar Usuário</RemoveButton>
                        </div> }
                </div>
            </UserContainer>
            
        );
    }
}