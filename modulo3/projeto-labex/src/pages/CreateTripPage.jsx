import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url, planetas, header } from "../constants/Data"
import useForm from "../hooks/Hooks";
import { useNavigate } from "react-router-dom";

const CreateTripPageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;
    & > form{
        margin: 0 auto;
        width: 350px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        & > input, select{
            background-color: #000000;
            padding: 10px;
            border-radius: 50px;
            border: none;
            color: white;
            align-self: center;
            width: 105%;
        }
        & > input{
            width: 100%;
        }
        & > button{
            align-self: center;
            background-color: #000000;
            color: white;
            padding: 10px;
            margin-top: 25px;
            border-radius: 50px;
            border: none;
            &:hover{
                opacity: 80%;
            }
            &:active{
                opacity: 100%;
            }
        }
    }

`

export default function CreateTrip() {
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });
    const [dataFutura, setDataFutura] = useState('')

    useEffect(() => {
        const data = new Date();
        const dia = String(data.getDate() + 1).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const amanha = ano + '-' + mes + '-' + dia
    	setDataFutura(amanha);
    },[])


    const criar = (event) => {
        event.preventDefault();
        axios.post(`${url}/trips`, form, {
            headers:{
                "Content-Type": "application/json",
                auth: localStorage.getItem("token")
            }
        })
        .then(() => {
            alert('Viagem criada com sucesso')
        })       
        cleanFields()
    }
    console.log(form);

    return (
        <CreateTripPageContainer>
            <Header/>
            <form onSubmit={criar}>
                <select 
                name="planet" 
                value={form.planet}
                onChange={onChange}
                required
                >
                    <option value="">Escolha um Planeta</option>
                    {planetas && planetas.map(pais => [
                        <option value={pais.nome} key={pais.ordem}>{pais.nome}</option>
                    ])}
                </select>

                <input 
                type="text"
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChange}  
                pattern="^.{5,}"
                title="O nome deve ter 5 ou mais caracteres"
                required
                />
                <input 
                type="date"
                name="date"
                placeholder="Data"
                value={form.date}
                onChange={onChange}
                min={dataFutura}
                required                
                />
                <input 
                type="text" 
                name="description"
                placeholder="Descrição"
                value={form.description}
                onChange={onChange}
                required
                pattern="^.{30,}"
                title="A profissão deve ter no minimo 30 caracteres"
                />
                <input 
                type="number" 
                name="durationInDays"
                placeholder="Duração em Dias"
                value={form.durationInDays}
                onChange={onChange}
                required
                min={50}
                title="O texto deve ter no minimo 30 caracteres"
                />
                <button>Enviar</button>
            </form>
            
        </CreateTripPageContainer>
    );
  }

