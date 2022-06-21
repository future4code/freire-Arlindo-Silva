import React from 'react';
import './App.css';
import CreatUser from './components/CreatUser';
import Users from './components/Users';
import axios from "axios";
import UsersDetails from './components/UserDetails';

export default class App extends React.Component{
  state = {
    users: [],
    userID: "",
    userDetails: {},
    name: "",
    email: "",
    screen: "create",
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

  getUserDetails = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: this.state.header
    }).then((resposta) => {
      this.setState({userDetails: resposta.data})
    })
  }

  componentDidMount = () => {
    this.updateList()
  }

  componentDidUpdate = () => {
    this.updateList()
  }

  changeScreen = (screen) => {
    const newScreen = screen
    this.setState({screen: newScreen})
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
      this.setState({name: "", email: ""})
    }).catch((error) => {
      alert("não foi criado novo usuario")
    })    
  }

  onClickUser = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: this.state.header
    }).then((resposta) => {
      this.setState({userDetails: resposta.data, screen: "user"})
    })
  }
  
  onClickRemove = (id) => {
    if (window.confirm("Quer mesmo deletar?") === true) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: this.state.header
      }).then((resposta) => {
        this.updateList()
        alert("usuario removido")
        this.setState({screen: "users"})
      }).catch((error) => {
        alert("usuario não foi removido devido a um erro")
      })    
    }
  }
  
  render() {
    switch (this.state.screen) {
      case "create":
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
      case "users":
        return (
          <Users 
          changeScreen={this.changeScreen}
          users={this.state.users}
          onClickRemove={this.onClickRemove}
          onClickUser={this.onClickUser}
          />
        )
      case "user":
        return (
          <UsersDetails
          changeScreen={this.changeScreen}
          user={this.state.userDetails}
          onClickRemove={this.onClickRemove}
          />
        )
      }
  }
}