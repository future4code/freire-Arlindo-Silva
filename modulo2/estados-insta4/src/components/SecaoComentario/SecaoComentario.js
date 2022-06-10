import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const Comentar = styled.div`
	display: flex;
`
const Comentario = styled.p`
	margin: 1px;
`

export class SecaoComentario extends Component {
	state = {
		inputComentario: "",
		comentarios: [],
		comentariosRender: []
	}

	onChangeComentario = (event) => {
		this.setState({ inputComentario: event.target.value });
		console.log(event.target.value);

	};
	onEnviarComentario = (event) =>{
		const novoComentario = this.state.inputComentario
		const novoComentarios = [...this.state.comentarios, novoComentario]
		this.setState({comentarios: novoComentarios})
		this.props.aoEnviar()
	}
	
	render() {
		this.state.comentariosRender = this.state.comentarios.map(comentario =>{
			return <Comentario>{comentario}</Comentario>
		})
		
		return <CommentContainer>
			{this.state.comentariosRender}
			<Comentar>
			<InputComentario 
				value={this.state.inputComentario}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.onEnviarComentario}>Enviar</button>
			</Comentar>
		</CommentContainer>
	}
}
