import React from "react";
import { PlaylistsContainer } from "./styled";
import Footer from "../../components/Footer";
import { LabelNav } from "./styled";

export default class Playlists extends React.Component{
  render(){
    const playlists = this.props.playlists.map(playlist => {
      return (
          <span key={playlist.id}>
          <button onClick={() => {this.props.playlistDetail(playlist.id, playlist.name)}}>{playlist.name}</button>
          <input 
          type="button" 
          value="X"
          onClick={() => {this.props.removePlaylist(playlist.id)}}
          />
          </span>
      )
    })
    return (
      <PlaylistsContainer>
        <nav>
          <LabelNav onClick={() => {this.props.changeScreen("create")}}>Criar Playlist</LabelNav>
          <LabelNav onClick={() => {this.props.changeScreen("home")}}>Início</LabelNav>
        </nav>
      {playlists != 0 ? 
        <div>
          {playlists}
        </div>
      :
        <div>
          <label onClick={() => {this.props.changeScreen("create")}}>Criar Playlist</label>
        </div>
        
      }
      
             
      <Footer/>
    </PlaylistsContainer>

    )
  }
}
