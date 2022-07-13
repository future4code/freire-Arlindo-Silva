import logo from '../constants/logo.svg'
import styled from 'styled-components';
import { changePages } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & > div{
        box-shadow: 0 0 1em #2adfe9;
        width: 90vw;
        height: 90vh;
        background-color: #000000a0;
        display: grid;
        grid-template-rows: 350px 1fr;
        align-items: center;
        position: absolute;
        bottom: 0;
        border-radius: 50px 50px 0px 0px;
        & > img{
            justify-self: center;
            max-height: 100%;
        }
        & > button{
            box-shadow: 0 0 1em #d1f7ff;
            height: 100px;
            width: 300px;
            justify-self: center;
            font-size: 20px;
            font-weight: bold;
            border-radius: 50px;
            border: none;
            background-color: #00554f;
            color: white;
            text-shadow: 0 0 5px black;
        }
    }


`

const BotaoAdm = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 35px;
    width: 150px;
    background-color: white;
    box-shadow: 0 0 3px #d1f7ff;
    border: 1px solid #8d9194;
    border-radius: 0 0 0 5px;
    font-weight: bold;
`


export default function Home() {
    const navigate = useNavigate()
    return (
        <HomeContainer>           
            <div>
                <img src={logo} alt="" />
                <button onClick={() => {changePages(navigate, 'list-trips')}}>Escolha sua viagem</button> 
            </div>   
            <BotaoAdm onClick={() => {changePages(navigate, 'login')}}>
                Área Administrativa
            </BotaoAdm>             
        </HomeContainer>
    );
  }
