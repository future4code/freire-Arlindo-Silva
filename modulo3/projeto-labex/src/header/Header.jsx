import logo from '../constants/logo.svg'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goBack, goToHomePage, goToLoginPage } from '../routes/coordinator';
import { useEffect } from 'react';
import Login from '../pages/LoginPage';

const HeaderContainer = styled.div`
    height: 30vh;
    display: grid;
    grid-template-rows: 1fr 15vh;
    
    & > div{
        padding: 0 10px;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        box-shadow: 0 0 1em #000000;
        & > img{
            width: 100px;
        }
        & > div{
            & > button{
                margin-left: 8px;
                background-color: transparent;
                border: none;
                color: white;
                padding-bottom: 1px;
                &:hover{
                    opacity: 70%;
                }
                &:active{
                    opacity: 100%;
                }
        }}
    }
    & > button{
        margin-left: 10px;
        align-self: center;
        justify-self: flex-start;
        font-weight: bold;
        font-size: 15px;
        background-color: transparent;
        border: none;
        text-shadow: 0 0 2px #d1f7ff;;
        padding: 5px;
        border: none;
        &:hover{
                opacity: 70%;
        }
        &:active{
            opacity: 100%;
        }
    }
`

export default function Header() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.setItem("token", '');
        goToLoginPage(navigate)
    }
    
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="logo" onClick={() => {goToHomePage(navigate)}}/>
                <div>
                <button>Ajuda</button>
                {token && <button onClick={logout}>Log out</button>}
                </div>
            </div>

            <button onClick={() => {goBack(navigate)}}>Voltar</button>
        </HeaderContainer>
    );
  }
