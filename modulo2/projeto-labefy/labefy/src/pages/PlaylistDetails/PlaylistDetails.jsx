import React from "react";
import logo from "../../assets/labefy.png"
import Footer from "../../components/Footer";
import { PlaylistContainer } from "./styled";
import { NavLabel } from "./styled";
import { DetailsContainer } from "./styled";
import { SongsContainer } from "./styled";
import { SongContainer } from "./styled";
import { Button } from "./styled";



export default class PlaylistDetails extends React.Component{  
    state = {
        name: "",
        artist: "",
        url: "",
        screenAdd: true,
        songs: this.props.playlist.songs
    }

    onChangeName = (ev) => {
        this.setState({name: ev.target.value})
    }

    onChangeArtist = (ev) => {
        this.setState({artist: ev.target.value})
    }

    onChangeUrl = (ev) => {
        this.setState({url: ev.target.value})
    }

    openClosePlaylist = () => {
        this.setState({screenAdd: !this.state.screenAdd})
    }

    onClickPlay = () => {
        alert(`play`)
    }

    render(){
        // let songs
        // if (this.props.playlist.quantity != 0) {
        //     songs = 
        // }
        return (
        <PlaylistContainer>
            <nav>
            <NavLabel onClick={() => {this.props.changeScreen("playlists")}}>Playlists</NavLabel>
            <NavLabel onClick={() => {this.props.changeScreen("home")}}>Início</NavLabel>
            </nav>
            {(this.state.screenAdd === true) ? 
            (<DetailsContainer>
                <span>
                    <h1>{this.props.playlist.name}</h1>
                    {(this.props.playlist.quantity === 0) ? 
                    <div>
                        <p>A playlist está vazia</p>
                        <p>Adicione músicas</p>
                    </div>
                    : 
                    <div>
                        <p>Quantidade: {this.props.playlist.quantity}</p>
                        <Button onClick={this.openClosePlaylist}>Abrir</Button>
                    </div>
                    }
                </span>
                <div>
                    <h4>Adicionar Musica: </h4>
                    <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.onChangeName}
                    placeholder="Nome"/>
                    <input 
                    type="text"
                    value={this.state.artist} 
                    onChange={this.onChangeArtist} 
                    placeholder="Artista"
                    />
                    <input 
                    type="url" 
                    value={this.state.url} 
                    onChange={this.onChangeUrl}
                    placeholder="Link"
                    />
                    <Button onClick={() => {this.props.addMusic(this.state.name, this.state.artist, this.state.url, this.props.playlist.id, this.props.playlist.name)}}>Adicionar</Button>
                </div>
            </DetailsContainer>)          
            :
            <SongsContainer>
                <Button onClick={this.openClosePlaylist}>Voltar</Button>
            {this.props.playlist.tracks.map(musica => {
                return (
                <SongContainer key={musica.id}>
                    <p> {musica.name}- {musica.artist}</p>
                    <p></p>
                    <audio src={musica.url} controls></audio>
                    <Button onClick={() => {this.props.removeSong(this.props.playlist.id, musica.id, this.props.playlist.name)}}>X</Button>
                    
                    
                </SongContainer>            
                )
            })}
            </SongsContainer>      
            }
            <Footer/>
        </PlaylistContainer>

        )
    }
}
