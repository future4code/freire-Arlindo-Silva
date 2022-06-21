import React from 'react';
import './App.css';
import CreatUser from './components/CreatUser';
import Users from './components/Users';
import axios from "axios";

export default class App extends React.Component{
  state = {
    users: [],
    name: "",
    email: "",
    home: true
  }



  changeScreen = () => {
    this.setState({home: !this.state.home})
  }

  onChangeName = (ev) => {
    this.setState({name: ev.target.value})
  }
  
  onChangeEmail = (ev) => {
    this.setState({email: ev.target.value})
  }
  
  onClickSend = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "arlindo-silva-freire"
      }
    }).then((resposta) => {
      alert("Criado")
      console.log(resposta.data);
    }).catch((error) => {
      alert("Error")
      console.log(error.message)
    })
  } 
  render() {
    let section
    if(this.state.home === true){
      return (
        <CreatUser
        name={this.state.name}
        onChangeName={this.onChangeName}
        email={this.state.email}
        onChangeEmail={this.onChangeEmail}
        onClickSend={this.onClickSend}
        changeScreen={this.changeScreen}
        />
    )
    }else{
      return (
        <Users 
        changeScreen={this.changeScreen}
        />
      )
    }
      return(
        {section}
      );
  }
}