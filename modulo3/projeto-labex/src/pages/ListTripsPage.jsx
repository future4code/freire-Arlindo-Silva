import Header from "../header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/Data"
import TripCard from "../components/TripCard";

const ListTripsPageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;

`

const ListTripsContainer = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr ;
    gap: 10px;
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
            <ListTripsContainer>
                {viagens && viagens.map(viagem => {
                    return <TripCard
                            key={viagem.id}
                            viagem={viagem}
                            />
                })}    
            </ListTripsContainer>
        </ListTripsPageContainer>
        
    );
  }
