import styled from "styled-components";

const TripCardContainer = styled.div`
    background-color: black;
    width: 40vw;
    color: white;
    border-radius: 20px;
    padding: 10px;
    justify-self: center;
    
`

export default function TripCard(props) {

    return (
        <TripCardContainer>
            <h4>{props.viagem.name}</h4>
            <p>Planeta: {props.viagem.planet}</p>
            <p>Saída: {props.viagem.date}</p>
            <p>Duração: {props.viagem.durationInDays} dias</p>
            <p>{props.viagem.description}</p>
        </TripCardContainer>
        
    );
  }
