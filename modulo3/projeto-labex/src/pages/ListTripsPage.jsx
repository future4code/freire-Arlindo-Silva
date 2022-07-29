import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/Data"
import TripCard from "../components/TripCard";

const ListTripsPageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 30vh 1fr 10vh ;
    & > h2{
        text-align: center;
    }
`

const ListTripsContainer = styled.div`
    display: grid;
    width: 100vw;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr ;
    padding-bottom: 20px;
    
    gap: 10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export default function ListTrips() {
    const [viagens, setViagens] = useState()

    useEffect(() => {
        axios.get(`${url}/trips`)
        .then(response => {
            setViagens(response.data.trips)
        })
    },[])

    return (
        <ListTripsPageContainer>
            <Header/>
            {viagens
            ?
            <ListTripsContainer>
                {viagens && viagens.map(viagem => {
                    return <TripCard
                            key={viagem.id}
                            viagem={viagem}
                            />
                })}    
            </ListTripsContainer>
            :
            <h2>Carregando...</h2>
            }
            <Footer/>
        </ListTripsPageContainer>
        
    );
  }
