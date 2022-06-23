import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";


export default class App extends React.Component{
  state = {
    screen: "home"
  }

  changeScreen = (screen) => {
    this.setState({screen: screen})
  }
  render(){
      switch (this.state.screen) {
        case "playlists":
          return <Playlists changeScreen={this.changeScreen}/> 
        case "create":
          return <CreatePlaylist changeScreen={this.changeScreen}/>       
        default:
          return <Home changeScreen={this.changeScreen}/>
      }
  }
}
