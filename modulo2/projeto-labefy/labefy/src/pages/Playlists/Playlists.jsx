import React from "react";
import { PlaylistsContainer } from "./styled";
import Footer from "../../components/Footer";

export default class Playlists extends React.Component{
  render(){
    const playlists = this.props.playlists.map(playlist => {
      return (
        <button>{playlist.name}</button>
      )
    })
    return (
      <PlaylistsContainer>
      <nav>
        <label onClick={() => {this.props.changeScreen("home")}}>Início</label>
      </nav>
      <div>
        {playlists}
      </div>          
      <Footer/>
    </PlaylistsContainer>

    )
  }
}
