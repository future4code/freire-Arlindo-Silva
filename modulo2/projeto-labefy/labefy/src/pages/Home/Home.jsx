import React from "react";
import logo from "../../assets/labefy.png"
import Footer from "../../components/Footer";
import { HomeContainer } from "./styled";

export default class Home extends React.Component{
  render(){
    return (
        <HomeContainer>
            <nav>
                <label onClick={() => {this.props.changeScreen("create")}}>Criar Playlist</label>
                <label onClick={() => {this.props.changeScreen("playlists")}}>Playlists</label>
            </nav>
            <img src={logo} alt="" />          
            <Footer/>
        </HomeContainer>
        
    )
  }
}
