import React from "react";
import logo from "../../assets/labefy.png"
import Footer from "../../components/Footer";
import { CreateContainer } from "./styled";


export default class CreatePlaylist extends React.Component{
  render(){
    return (
      <CreateContainer>
        <nav>
          <label onClick={() => {this.props.changeScreen("playlists")}}>Playlists</label>
          <label onClick={() => {this.props.changeScreen("home")}}>Voltar</label>
        </nav>
        <div>
          
        </div>          
        <Footer/>
      </CreateContainer>

    )
  }
}
