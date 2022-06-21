import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class Users extends React.Component{
    render() {
        return(
            <div>
                ola
                <button onClick={this.props.changeScreen}>Ir para pagina anterior</button>
            </div>
        );
    }
}