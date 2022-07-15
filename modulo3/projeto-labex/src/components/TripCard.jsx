import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TripCardContainer = styled.div`
    cursor: pointer;
    background-color: black;
    width: 40vw;
    color: white;
    border-radius: 20px;
    padding: 10px;
    justify-self: center;
    
`

export default function TripCard(props) {
    const navigate = useNavigate()

    const onClickInscrever = () => {
        navigate('/trips/application')
    }

    return (
        <TripCardContainer>
            <h3>{props.viagem.name}</h3>
            <li>Planeta: {props.viagem.planet}</li>
            <li>Saída: {props.viagem.date}</li>
            <li>Duração: {props.viagem.durationInDays} dias</li>
            <p>{props.viagem.description}</p>
            <button onClick={onClickInscrever}>Inscrever</button>
        </TripCardContainer>
        
    );
  }
