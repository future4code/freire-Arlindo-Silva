import Header from "../header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url, paises } from "../constants/Data"
import useForm from "../hooks/Hooks";
import { useNavigate } from "react-router-dom";

const ApplicationFormPageContainer = styled.div`
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
        }
        & > button{
            align-self: center;
            background-color: #000000;
            color: white;
            padding: 7px;
            margin-top: 25px;
            border-radius: 50px;
        }
    }

`

export default function ApplicationForm() {
    const [viagens, setViagens] = useState()
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", trip: "" });

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${url}/trips`)
        .then(response => {
            setViagens(response.data.trips)
        })
    },[])

    const inscrever = (event) => {
        event.preventDefault();
        cleanFields()
    }

    console.log(form);
    return (
        <ApplicationFormPageContainer>
            <Header/>
            <form onSubmit={inscrever}>
                <select 
                name="trip" 
                value={form.trip}
                onChange={onChange}
                required
                >
                    <option value="">Escolha uma Viagem</option>
                    {viagens && viagens.map(viagem => [
                        <option value={viagem.id}>{viagem.name} - {viagem.planet}</option>
                    ])}
                </select>
                <input 
                type="text"
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChange}  
                pattern="^.{3,}"
                title="O nome deve ter 3 ou mais caracteres"
                required
                />
                <input 
                type="number"
                name="age"
                placeholder="Idade" 
                value={form.age}
                onChange={onChange}
                required
                min={18}
                />
                <input 
                type="text" 
                name="profession"
                placeholder="Profissão"
                value={form.profession}
                onChange={onChange}
                required
                pattern="^.{3,}"
                title="A profissão deve ter no minimo 10 caracteres"
                />
                <input 
                type="text" 
                name="applicationText"
                placeholder="Texto de Candidatura"
                value={form.applicationText}
                onChange={onChange}
                required
                pattern="^.{30,}"
                title="O texto deve ter no minimo 30 caracteres"
                />
                <select 
                name="country" 
                value={form.country}
                onChange={onChange}
                required
                >
                    <option value="">Escolha um País</option>
                    {paises && paises.map(pais => [
                        <option value={pais.nome} key={pais.ordem}>{pais.nome}</option>
                    ])}
                </select>
                <button>Enviar</button>
            </form>
            
        </ApplicationFormPageContainer>
    );
  }
