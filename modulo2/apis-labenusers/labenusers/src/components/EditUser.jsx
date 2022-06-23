import React from "react";
import styled from "styled-components";

const EditContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    & p{
        margin: 5px;
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