import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/Data"
import { useParams, useNavigate } from "react-router-dom";

const DetailTripPageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 30vh 1fr 10vh;
    & > h2{
        text-align: center;
    }

`

const DetailTripContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    width: 90vw;
    margin: 0 auto;
    padding-bottom: 20px;    
    gap: 20px;
    & > hr {
        border: 1px solid black;
        background-color: black;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        
    }

`

const CandidateCard = styled.div`
    cursor: pointer;
    background-color: black;
    border-radius: 25px;
    color: white;
    padding: 1px 20px;
    margin-bottom: 10px;
    & > h4{
        margin: 0;
        padding: 0;
        display: inline;
    }
    & > button{
            margin: 20px;
            border-radius: 50px;
            border: none;
            background-color: #00554f;
            color: white;
            padding: 5px;
            text-shadow: 0 0 5px black;
            &:hover{
                opacity: 70%;
            }
            &:active{
                opacity: 100%;
            }
    }  

    & > :last-child{
        background-color: red;
    }
`

export default function TripDetails() {
    const navigate = useNavigate()
    const pathParams = useParams()
    const [viagem, setViagem] = useState({})


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === '') {
            console.log("Não está logado!!!");
            navigate("/login");
        }
        getTripDetails()
    },[])

    const getTripDetails = () => {
        axios.get(`${url}/trip/${pathParams.id}`, {
            headers:{
                "Content-Type": "application/json",
                auth: localStorage.getItem("token")
            }
        })
        .then(response => {
            setViagem(response.data.trip)
            console.log(response.data.trip);
        })
    }

    const decideCandidato = (decisao, id) => {
        const body = {
            approve: decisao
        }
        axios.put(`${url}/trips/${pathParams.id}/candidates/${id}/decide`, body, {
            headers:{
                "Content-Type": "application/json",
                auth: localStorage.getItem("token")
            }
        })
        .then(() => {
            alert(`Com sucesso`)
            getTripDetails()
        })
    }

    return (
        <DetailTripPageContainer>
            <Header/>
            {viagem.name 
            ? 
            <DetailTripContainer>
                <div>
                    <h1>{viagem.name}</h1>
                    <h3>{viagem.planet}, viagem de {viagem.durationInDays} dias</h3>
                    <h3>Saída: {viagem.date}</h3>
                    <h4>Descrição:</h4>
                    <p>{viagem.description}</p>
                </div>
                <hr />
                <div>
                    <h2>Candidatos pendentes:</h2>
                    {viagem.candidates[0] ? viagem.candidates.map(candidate => {
                        return  <CandidateCard>
                                    <h3>{candidate.name}, {candidate.age} anos</h3>
                                    <h4>País:</h4> <span>{candidate.country}</span><br />
                                    <h4>Profissão:</h4> <span>{candidate.profession}</span>
                                    <h3>Texto de Candidatura:</h3>
                                    <p>{candidate.applicationText}</p>
                                    <button onClick={() => {decideCandidato(true, candidate.id)}}>Aprovar</button>
                                    <button onClick={() => {decideCandidato(false, candidate.id)}}>Reprovar</button>
                                </CandidateCard>
                    })
                    :
                    <p>Não há candidatos pendentes</p>
                    }
                    <h2>Candidatos aprovados:</h2>
                    {viagem.approved[0] ? viagem.approved.map(candidate => {
                        return  <CandidateCard>
                                    <h3>{candidate.name}, {candidate.age} anos</h3>
                                    <h4>País:</h4> <span>{candidate.country}</span><br />
                                    <h4>Profissão:</h4> <span>{candidate.profession}</span>
                                    <h3>Texto de Candidatura:</h3>
                                    <p>{candidate.applicationText}</p>
                                    <div></div>
                                </CandidateCard>
                    })
                    :
                    <p>Não há candidatos aprovados</p>
                    }

                </div>
            </DetailTripContainer>
            : 
            <h2>Carregando...</h2>}
            <Footer/>
        </DetailTripPageContainer>
        
    );
  }


