import axios from "axios";
import Matches from "./pages/Matches/Matches";
import Match from "./pages/Match/Match";
import { useState, useEffect } from "react";
import { url } from "./constants/constants";
import styled from "styled-components";

const GlobalContainer = styled.div`
  min-height: 90vh;  
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function App() {
  const [matches, setMatches] = useState([])
  const [screen, setScreen] = useState('match')

  useEffect(() => {
    getMatches()
  }, [])

  const changeScreen = () => {
    console.log('entrou');
    switch (screen) {
      case 'match':
        setScreen('matches')
        break;
      case 'matches':
        setScreen('match')
        break;
      default:
        setScreen('match')
        break;
    }
  }

  const getMatches = () => {
    axios.get(`${url}/matches`)
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => {
        alert(`Você ainda não possui matches`)
      })
  }

  const reset = () => {
    axios.put(`${url}/clear`)
    .then(() => {
      getMatches()
    })
  }

  switch (screen) {
    case 'match':
      return (
        <GlobalContainer>
          <Match
            getMatches={getMatches}
            changeScreen={changeScreen}
          />
        </GlobalContainer>
      )
    case 'matches':
      return (
        <GlobalContainer>
          <Matches
            reset={reset}
            matches={matches}
            changeScreen={changeScreen}
          />
        </GlobalContainer>
      )
    default:
      return <div>RE</div>
  }
}