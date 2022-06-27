import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import axios from "axios";
import { url } from "./constants/urls";
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails";


export default class App extends React.Component{
  state = {
    screen: "home",
    auth: {
      headers: {
      Authorization: "arlindo-silva-freire"
      }
    },
    playlists: [],
    playlist:{}
  }

  componentDidMount() {
    this.getPlaylists()
  }

  getPlaylists = () => {
    axios.get(url, this.state.auth)
    .then((res) => {
      this.setState({playlists: res.data.result.list})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  playlistDetail = (id, name) => {
    axios.get(`${url}/${id}/tracks`, this.state.auth)
    .then((res) => {
      this.setState({screen: "playlist"})
      const newPlaylist = {...res.data.result, name: name, id: id}
      this.setState({playlist: newPlaylist})
      console.log(newPlaylist);
    }) 
    .catch((err)=>{
      alert('ERROR')
    })
  }

  addMusic = (name, artist, link, playlistId, playlistName) => {
    console.log("entrei");
    console.log(artist);
    const body = {
      name: name,
      artist: artist,
      url: link
    }
    axios.post(`${url}/${playlistId}/tracks`, body, this.state.auth)
    .then((res) => {
      this.playlistDetail(playlistId, playlistName)
    })
    .catch((err) => {
      alert(`ERROR`)
    })
  }
  
  changeScreen = (screen) => {
    this.setState({screen: screen})
  }

  createPlaylist = (name) => {
    console.log(name);
    const body = {
      name: name
    }
    axios.post(url, body, this.state.auth)
    .then((res) => {
      alert('criada')
      this.getPlaylists()
    })
    .catch((err) => {
      alert('error')
      console.log(err);
    })   
  }

  removePlaylist = (id) => {
    axios.delete(`${url}/${id}`, this.state.auth)
    .then(() => {
      this.getPlaylists()
    })
    .catch(() => {
      alert(`ERROR`)
    })      
  }

  removeSong = (playlistId, songId, playlistName) => {
    axios.delete(`${url}/${playlistId}/tracks/${songId}`, this.state.auth)
    .then(() =>{
      this.playlistDetail(playlistId, playlistName)
    })
    .catch(() => {
      alert(`ERROR`)
    })
  }

  render(){
      switch (this.state.screen) {
        case "playlists":
          return (
          <Playlists 
          changeScreen={this.changeScreen}
          playlists={this.state.playlists}
          playlistDetail={this.playlistDetail}
          removePlaylist={this.removePlaylist}
          /> 
          )
        case "create":
          return (
            <CreatePlaylist 
            changeScreen={this.changeScreen}
            createPlaylist={this.createPlaylist}
            />       
          )
        case "playlist":
          return(
            <PlaylistDetails
            changeScreen={this.changeScreen}
            playlist={this.state.playlist}
            addMusic={this.addMusic}
            removeSong={this.removeSong}
            />
          )
        default:
          return <Home changeScreen={this.changeScreen}/>
      }
  }
}
