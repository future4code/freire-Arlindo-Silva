import React from 'react';
import FotoPerfil from "./img/perfil.jpg";
import LogoRchlo from "./img/rchlo.png";
import LogoTransportes from "./img/transportes.jpg";
import Seta from "./img/seta.png";
import EmailImg from "./img/email.png";
import EnderecoImg from "./img/adress.jpg";
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const AppStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const Container = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`



function App() {
  return (
    <AppStyle>
      <Container>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Arlindo Vinícius" 
          descricao="Oi, eu sou o Arlindo Vinícius. Sou aluno da Labenu. Adoro programação e estou muito empolgado com o que o curso irá me trazer no futuro"
        />
        
        <ImagemButton 
          imagem={Seta}
          texto="Ver mais"
        />
      </Container>

      <Container>
        <CardPequeno
          imagem={EmailImg}
          tipoDado="Email:" 
          dado="viniciusamado7@gmail.com" 
        />
        
        <CardPequeno
          imagem={EnderecoImg}
          tipoDado="Endereço:" 
          dado="Itabuna BA" 
        />
      </Container>

      <Container>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem={LogoRchlo}
          nome="Lojas Riachuelo" 
          descricao="Assistente de Vendas no setor de tecnologia" 
        />
        
        <CardGrande 
          imagem={LogoTransportes}
          nome="Tansportadora" 
          descricao="Auxiliar Administrativo" 
        />
      </Container>

      <Container>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </Container>
    </AppStyle>
  );
}

export default App;
