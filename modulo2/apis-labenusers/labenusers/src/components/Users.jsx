import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class Users extends React.Component{
    render() {
        const usersMapeados = this.props.users.map(user =>{
            return (<div key={user.id}>
            <li>
                <input 
                type="button" 
                value={user.name}
                onClick={() => {this.props.onClickUser(user.id)}}
                />
                <button onClick={() => {this.props.onClickRemove(user.id)}}>Remover</button>
            </li>
        </div>
            )
        })
        return(
            <div>                
                <button onClick={() => {this.props.changeScreen("create")}}>Voltar</button>
                <div>
                    <input 
                    id="search"
                    onChange={this.props.onChangeInputSearch}
                    value={this.props.inputSearch}                    
                    type="text" />
                    <button onClick={this.props.onClickSearch}>Pesquisar</button>
                </div>
                <h3>Lista de Usuarios:</h3>
                {usersMapeados}
            </div>
            
        );
    }
}