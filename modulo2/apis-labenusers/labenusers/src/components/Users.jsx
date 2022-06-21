import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class Users extends React.Component{
    render() {
        const usersMapeados = this.props.users.map(user =>{
            return (
            <div>
                <li>
                    {user.name}
                    <button onClick={() => {this.props.onClickRemove(user.id)}}>Remover</button>
                </li>
            </div>
            )
        })
        return(
            <div>
                <h3>Lista de Usuarios:</h3>
                {usersMapeados}
                <button onClick={this.props.changeScreen}>Voltar</button>
            </div>
            
        );
    }
}