import axios from "axios";
import Matches from "./pages/Matches/Matches";
import Match from "./pages/Match/Match";
import { useState, useEffect } from "react";
import { url } from "./constants/constants";

export default function App() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios.get(`${url}/matches`)
    .then((res) => {
        console.log(`entrei`);
        setMatches(res.data.matches)
    })
    .catch((err) => {
        alert(`Você ainda não possui matches`)
    })
}


  return (
    <div>
      <Match
      getMatches={getMatches}
      />
      <Matches
      matches={matches}
      />
    </div>
    
  );
}