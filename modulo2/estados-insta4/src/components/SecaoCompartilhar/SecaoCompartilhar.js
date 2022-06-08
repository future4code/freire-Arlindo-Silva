import React, {Component} from 'react'
import styled from 'styled-components'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.jpg'
import iconeInstagram from '../../img/instagram.png'

const ShareContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	padding: 5px;
`
const IconesRedes = styled.img`
	width: 40px;
	padding: 10px;
`
const InputMensagem = styled.input`
`
let mensagem

export default class SecaoCompartilhar extends Component {
	state = {
		inputMensagem: ""
	}

	

	onChangeMensagem = (event) => {
		this.setState({ inputMensagem: event.target.value });
		console.log(event.target.value);
	};

	onClickBotao = (rede) => {
		console.log(`Post compartilhado`);
		
	}
	
	render() {
		return <ShareContainer>
			<InputMensagem
			value={this.state.inputMensagem}
			onChange={this.onChangeMensagem}
			/>
			<div>
			<a href="https://www.facebook.com/" target='_blank' onClick={this.onClickBotao}><IconesRedes src={iconeFacebook} alt=""/></a>
			<a href="https://www.twitter.com/" target='_blank' onClick={this.onClickBotao}><IconesRedes src={iconeTwitter} alt=""/></a>
			<a href="https://www.instagram.com/" target='_blank' onClick={this.onClickBotao}><IconesRedes src={iconeInstagram} alt=""/></a>
			</div>
		</ShareContainer>
	}
}
