import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido]= useState(false)
  const [comentando, setComentando] = useState(false)
  const [comentarios, setComentarios] = useState([])
  const [comentario, setComentario] = useState('')


	const onChangeComentario = (event) => {
		setComentario(event.target.value)
	}


  let iconeCurtida, caixaDeComentario, numeroComentarios = 0, numeroCurtidas = 0

  const onClickCurtida = () => {
    setCurtido(!curtido)
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setComentario('')
  }

  

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
    numeroCurtidas = 1
  }else{
    iconeCurtida = iconeCoracaoBranco
    numeroCurtidas = 0
  }

  if (comentando) {
    caixaDeComentario = <SecaoComentario 
                          enviarComentario={enviarComentario}
                          onChangeComentario={onChangeComentario}
                          comentario={comentario}
                          comentarios={comentarios}
                          />
  }


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post