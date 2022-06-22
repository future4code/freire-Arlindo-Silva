import React from "react";
import styled from "styled-components";

const EditContainer = styled.div`
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


export default class EditUser extends React.Component{
    render() {
        return(
            <EditContainer>
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
            </EditContainer>
            
        );
    }
}