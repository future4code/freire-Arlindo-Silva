import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TripCardContainer = styled.div`
    cursor: pointer;
    background-color: black;
    width: 25vw;
    color: white;
    border-radius: 20px;
    padding: 10px;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1em #d1f7ff;  
    & > div{
        width: 100%;
    }
    & > button{
            justify-self: center;
            border-radius: 50px;
            border: none;
            background-color: #00554f;
            color: white;
            padding: 10px;
            text-shadow: 0 0 5px black;
            &:hover{
                opacity: 70%;
            }
            &:active{
                opacity: 100%;
            }
    }  
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90vw;
    }

`

export default function TripCard(props) {
    const navigate = useNavigate()

    const onClickInscrever = (id) => {
        localStorage.setItem("viagemEscolhida", id);
        navigate('/trips/application')        
    }

    return (
        <TripCardContainer>
            <div>
                <h3>{props.viagem.name}</h3>
                <li>Planeta: {props.viagem.planet}</li>
                <li>Saída: {props.viagem.date}</li>
                <li>Duração: {props.viagem.durationInDays} dias</li>
                <p>{props.viagem.description}</p>
            </div>
            <button onClick={() => {onClickInscrever(props.viagem.id)}}>Inscreva-se</button>
        </TripCardContainer>
        
    );
  }
