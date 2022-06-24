import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import axios from "axios";
import { url } from "./constants/urls";


export default class App extends React.Component{
  state = {
    screen: "home",
    auth: {
      headers: {
      Authorization: "arlindo-silva-freire"
      }
    },
    playlists: []
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
    })
    .catch((err) => {
      alert('error')
      console.log(err);
    })   
  }

  render(){
      switch (this.state.screen) {
        case "playlists":
          return (
          <Playlists 
          changeScreen={this.changeScreen}
          playlists={this.state.playlists}
          /> 
          )
        case "create":
          return (
            <CreatePlaylist 
            changeScreen={this.changeScreen}
            createPlaylist={this.createPlaylist}
            />       
          )
        default:
          return <Home changeScreen={this.changeScreen}/>
      }
  }
}
