import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class Users extends React.Component{
    state = {
        search: "",
        filterSearch: ""
    }

    onChangeSearch = (ev) => {
        this.setState({search: ev.target.value})
    }

    search = () => {
        this.setState({filterSearch: this.state.search})
    }

    render() {
        const usersMapeados = this.props.users
        .filter(user => {
            return user.name.toLowerCase().includes(this.state.filterSearch.toLowerCase())
        })
        .map(user =>{
            return (
            <div key={user.id}>
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
                    onChange={this.onChangeSearch}
                    value={this.state.search}                    
                    type="text" />
                    <button onClick={this.search}>Pesquisar</button>
                </div>
                <h3>Lista de Usuarios:</h3>
                {usersMapeados}
            </div>
            
        );
    }
}