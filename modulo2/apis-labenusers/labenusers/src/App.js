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
    home: true,
    header: {
      Authorization: "arlindo-silva-freire"
    }
  }

  updateList = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: this.state.header
    }).then((resposta) => {
      this.setState({users: resposta.data})
    })
  }

  componentDidMount = () => {
    this.updateList()
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
      headers: this.state.header
    }).then((resposta) => {
      this.updateList()
      alert("criado novo usuario")
      console.log(resposta.data);
    }).catch((error) => {
      alert("não foi criado novo usuario")
      console.log(error.message)
    })    
  }
  
  onClickRemove = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: this.state.header
    }).then((resposta) => {
      this.updateList()
      alert("usuario removido")
    }).catch((error) => {
      alert("usuario não foi removido devido a um erro")
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
        users={this.state.users}
        onClickRemove={this.onClickRemove}
        />
      )
    }
      return(
        {section}
      );
  }
}