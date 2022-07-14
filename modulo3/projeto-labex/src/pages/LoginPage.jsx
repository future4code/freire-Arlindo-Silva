import Header from "../header/Header";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { alpha } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import degrade from '../constants/degrade.jpg'
import { useState } from "react";
import { url } from "../constants/Data";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { goToAdmHomePage } from "../routes/coordinator";

const LoginPageContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-rows: 25vh 75vh;
    /* background-image: url(${degrade}); */
    background-color: #1a9da6;
`

const LoginContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    & h2{
        margin-top: 50px;
        margin-bottom: 25px;
    }

    & input{
        background-color: #000000;
        width: 90%;
        padding: 10px;
        border-radius: 50px;
        border: none;
        color: white;
    }
    & button{
        background-color: #000000;
        color: white;
        padding: 7px;
        margin-top: 25px;
        border-radius: 50px;
    }
`


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    const handleEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const handleSenha = (ev) => {
        setSenha(ev.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post(`${url}/login`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            setEmail('') 
            setSenha('')
            navigate('/admin-home')
            
        })
        .catch((error) => {
            console.log("Deu erro", error.response);
        })
    }

    return (
        <LoginPageContainer>
            <Header/>
            <LoginContainer>
                <h2>Faça Login para ter acesso</h2>
                <input 
                placeholder="Email" 
                onChange={handleEmail}
                value={email}
                />
                <input type="password" 
                placeholder="Senha" 
                value={senha}
                onChange={handleSenha}
                />
                <button
                onClick={login}
                >Entrar</button>
            </LoginContainer>
        </LoginPageContainer>
    );
  }
