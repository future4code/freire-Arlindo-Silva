import React from "react";
import logo from "../../assets/labefy.svg"
import { HomeContainer } from "./styled";

export default class Home extends React.Component{
  render(){
    return (
        <HomeContainer>
            
            <img src={logo} alt="" />
        </HomeContainer>
        
    )
  }
}
