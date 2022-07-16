import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url, header } from "../constants/Data"
import { useNavigate } from 'react-router-dom';


const AdminHomePageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    & > h2{
        text-align: center;
    }
`

const ViagemCard = styled.div`
    cursor: pointer;
    display: flex;
    width: 300px;
    justify-content: space-between;
    background-color: black;
    color: white;
    align-items: center;
    margin: 0 auto;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 50px;
    & > button{
        background-color: #ff00001f;
        color: red;
        border-radius: 100px;
        border: 2px solid red;
        font-size: 18px;
        font-weight: bold;

    }

`

const CreateButton = styled.button`
    margin: 0 auto;
    font-size: 18px;
    margin-bottom: 30px;
    align-self: center;
    background-color: #012b28;
    color: white;
    padding: 15px;
    border-radius: 50px;
    border: none;
    &:hover{
         opacity: 80%;
    }
    &:active{
        opacity: 100%;
    }
`
export default function AdminHome() {
    const navigate = useNavigate()
    const [viagens, setViagens] = useState()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token === '') {
            console.log("Não está logado!!!");
            navigate("/login");
        }
        getTrips()
    })

    const getTrips = () => {
        axios.get(`${url}/trips`)
        .then(response => {
            setViagens(response.data.trips)
        })
    }

    const onClickTrip =(id) => {
        navigate(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {
        axios.delete(`${url}/trips/${id}`, {
            headers:{
                "Content-Type": "application/json",
                auth: localStorage.getItem("token")
            }
        })
        .then(() => {
            console.log('Deletado');
            getTrips()
        })
        .catch((error) => {
            console.log(error);
        })
        
    }
    return (
        <AdminHomePageContainer>
            <Header/>
            <CreateButton
            onClick={() => {navigate('/admin/trips/create')}}
            >
                Adicionar viagem ao catálogo
            </CreateButton>
            {viagens && viagens.map(viagem => {
                return  <ViagemCard>
                            <p onClick={() => {onClickTrip(viagem.id)}}>{viagem.name}</p>
                            <button onClick={() => {deleteTrip(viagem.id)}}>X</button>
                        </ViagemCard>
                            
            })}
          
        </AdminHomePageContainer>
    );
  }
