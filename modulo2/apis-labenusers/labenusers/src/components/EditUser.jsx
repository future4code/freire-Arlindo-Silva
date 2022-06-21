import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class EditUser extends React.Component{
    render() {
        return(
            <div>
                <label htmlFor="name">Novo Nome:</label>
                <input 
                id="name"
                value={this.props.name}
                onChange={this.props.onChangeName}
                type="text" />
                <label htmlFor="email">Novo Email:</label>
                <input 
                id="email"
                value={this.props.email}
                onChange={this.props.onChangeEmail}
                type="text" />
            </div>
            
        );
    }
}