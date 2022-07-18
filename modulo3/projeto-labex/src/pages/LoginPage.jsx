import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { url } from "../constants/Data";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import useForm from "../hooks/Hooks";

const LoginPageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 30vh 1fr 10vh;
    background-color: #1a9da6;
`

const LoginContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2{
        cursor: pointer;
        margin-top: 50px;
        margin-bottom: 25px;
    }
    & > form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:5px;
        width: 300px;
        & > input{
            background-color: #000000;
            width: 90%;
            padding: 10px;
            border-radius: 50px;
            border: none;
            color: white;
        }
        & > button{
            background-color: #000000;
            color: white;
            padding: 7px;
            margin-top: 25px;
            border-radius: 50px;
            border: none;
        }
    }
`


export default function Login() {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault();
        axios.post(`${url}/login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            navigate('/admin/trips/list')
            
        })
        .catch((error) => {
            alert("Verifique suas credenciais");
        })
        cleanFields();
    }

    return (
        <LoginPageContainer>
            <Header/>
            <LoginContainer>
                <h2>Faça Login para ter acesso</h2>

                <form onSubmit={login}>
                    <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder={"E-mail"}
                        required
                        type="email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        placeholder={"Senha"}
                        required
                        pattern={"^.{3,}"}
                        title={"Sua senha deve ter no mínimo 3 caracteres"}
                    />

                    <button>Entrar</button>
                </form>
            </LoginContainer>
            <Footer/>
        </LoginPageContainer>
    );
  }
