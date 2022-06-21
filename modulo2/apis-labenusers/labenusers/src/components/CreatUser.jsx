import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class CreatUser extends React.Component{
    render() {
        return(
            <div>                
                <div><button onClick={() => {this.props.changeScreen("users")}}>Ir para lista de Usuarios</button></div>
                <h3>Criar novo Usuario:</h3>
                <label htmlFor="nome">Nome:</label>
                <input
                value={this.props.name}
                type="text" 
                placeholder="digite nome"
                onChange={this.props.onChangeName} 
                />
                <label htmlFor="email">Email:</label>
                <input 
                value={this.props.email}
                type="email" 
                placeholder="digite email"
                onChange={this.props.onChangeEmail} 
                />
                <button onClick={this.props.onClickSend}>Criar</button>              
            </div>
        );
    }
}