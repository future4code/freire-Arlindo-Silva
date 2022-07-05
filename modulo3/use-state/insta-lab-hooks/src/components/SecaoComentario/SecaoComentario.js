import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
	padding: 10px;
`
const Comentando = styled.div`
	display: flex;
    justify-content: center;

`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	
	return (
		<CommentContainer>
			<div>{props.comentarios.map(comentario => {
				return <p>{comentario}</p>
			})}</div>
			<Comentando>
				<InputComment
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={props.comentario}
					onChange={props.onChangeComentario}
				/>
				<button onClick={() => { props.enviarComentario(props.comentario) }} >Enviar</button>
			</Comentando>
		</CommentContainer>
	)
}


export default SecaoComentario