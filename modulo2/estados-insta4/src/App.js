import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.form`
  border: 1px solid black;
  margin: 10px;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'vinyperroni',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'irmaosdopop',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      },
      {
        nomeUsuario: 'waltinhown',
        fotoUsuario: 'https://picsum.photos/50/53',
        fotoPost: 'https://picsum.photos/200/153'
      }
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }
  
  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });

  };

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });

  };

  onClickPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };
    const novoPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novoPosts });
    this.setState({inputNomeUsuario: "", inputFotoUsuario: "", inputFotoPost: ""});
    console.log(this.state.posts);
  }

  render() {
    const postsRenderizados = this.state.posts.map(post =>{
      return(
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <Formulario>
          <h3>Novo Post</h3>
          <input 
          placeholder='Nome de usuario'
          value={this.state.inputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          />
          <input
          placeholder='link da foto de perfil'
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}          
          />
          <input
          placeholder='link da foto a ser postada'
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          />
          <input type='button' value='Postar' onClick={this.onClickPost}/>
        </Formulario>    

        {postsRenderizados}

      </MainContainer>
    );
  }
}

export default App;
