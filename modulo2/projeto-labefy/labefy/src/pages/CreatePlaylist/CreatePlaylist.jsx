import React from "react";
import logo from "../../assets/labefy.png"
import Footer from "../../components/Footer";
import { CreateContainer } from "./styled";


export default class CreatePlaylist extends React.Component{
  state = {
    name: ""
  }

  com

  onInsertNamePlaylist = (ev) => {
    this.setState({name: ev.target.value})
  }

  render(){
    return (
      <CreateContainer>
        <nav>
          <label onClick={() => {this.props.changeScreen("playlists")}}>Playlists</label>
          <label onClick={() => {this.props.changeScreen("home")}}>Início</label>
        </nav>
        <div>
          <h2>Criar Nova Playlist</h2>
          <span>
            <input type="text"
            placeholder="Digite o nome"
            value={this.state.namePlaylist}
            onChange={this.onInsertNamePlaylist}
            />
            <button onClick={() => {this.props.createPlaylist(this.state.name)}}>Criar</button>
          </span>
        </div>          
        <Footer/>
      </CreateContainer>

    )
  }
}
