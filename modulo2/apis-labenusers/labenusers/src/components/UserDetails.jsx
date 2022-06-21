import React from "react";
import EditUser from "./EditUser";
import styled from "styled-components";
import axios from "axios";


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
            <div>
                <button onClick={() => {this.props.changeScreen("users")}}>Voltar</button>
                <p>name: {this.state.nameScreen}</p>
                <p>email: {this.state.emailScreen}</p>
                <button onClick={() => {this.props.onClickRemove(this.props.user.id)}}>Remover</button>
                {this.state.edit ? (
                <div>
                    <EditUser 
                    onEditUser={this.onEditUser} 
                    onChangeName={this.onChangeName} 
                    onChangeEmail={this.onChangeEmail}
                    />
                    <button onClick={() => {this.editUser(this.props.user.id)}}>Salvar</button>
                </div>
                ) : <button onClick={this.onClickEdit}>Editar usuario</button>}
            </div>
            
        );
    }
}