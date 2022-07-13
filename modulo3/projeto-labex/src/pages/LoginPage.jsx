import Header from "../header/Header";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { alpha } from "@mui/material";
import InputBase from '@mui/material/InputBase';

const LoginPageContainer = styled.div`
    color: white;
    width: 100vw;
    display: grid;
    grid-template-rows: 25vh 75vh;
    background-color: #0c0c0c;
`

const LoginContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-rows: 50px 1fr 1fr 1fr;
`


export default function Login() {
    return (
        <LoginPageContainer>
            <Header/>
            <LoginContainer>
                <h2>Faça Login para ter acesso adm</h2>
                <TextField  label="Email" variant="filled"/>
            </LoginContainer>
        </LoginPageContainer>
    );
  }
