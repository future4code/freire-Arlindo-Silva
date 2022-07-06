import axios from "axios";
import { useEffect ,useState } from "react";
import { url } from "../../constants/constants";
import Card from "../../components/Card/Card";
import styled from "styled-components";

const MatchContainer = styled.div`
    height: 400px;
    display: grid;
    grid-template-rows: 1fr 50px;
`
export default function Match(props) {

    const [person, newPerson] = useState({})

    useEffect(() => {
        getPerson()
    }, [])

    async function getPerson(){
        try {
            const response = await axios.get(`${url}/person`)
            newPerson(response.data.profile)
        } catch (error) {
            alert('Erro')
        }
    }

    async function likePerson(id){
        console.log(id);
        try {
            const body = {
                id: `${id}`,
                choice: true
            }
            await axios.post(`${url}/choose-person`, body)
            getPerson()
            props.getMatches()
        } catch (error) {
            alert('Erro')
            console.log(error);
        }
    }

    return (
        <div>
        <MatchContainer>
            <Card
            name={person.name}
            photo={person.photo}
            age={person.age}
            bio={person.bio}
            />
            <div>
                <button onClick={() => {likePerson(person.id)}}>
                    Curtir
                </button>
                <button>
                    Descurtir
                </button>
            </div>
    
        </MatchContainer>

        </div>
    );
}