import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import Card from "../../components/Card/Card";
import SiteHeader from "../../components/Header/Header";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Like from '@mui/icons-material/FavoriteBorder';
import Discard from '@mui/icons-material/Clear';
import Restart from '@mui/icons-material/RestartAlt';

const MatchContainer = styled.div`
    border: 1px solid #be80ff;
    background-color: #9061c211;
    border-radius: 20px;
    height: 500px;
    width: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 50px 1fr 80px;
    justify-content: center;
    align-items: center;
    & :last-child{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`
export default function Match(props) {

    const [person, newPerson] = useState({})

    useEffect(() => {
        getPerson()
    }, [])

    async function getPerson() {
        try {
            const response = await axios.get(`${url}/person`)
            newPerson(response.data.profile)
        } catch (error) {
            alert('Erro')
        }
    }

    async function likePerson(id) {
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

    async function discardPerson(id) {
        console.log(id);
        try {
            const body = {
                id: `${id}`,
                choice: false
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
        <MatchContainer>
            <SiteHeader leftButton='matches' changeScreen={props.changeScreen}/>
            <Card
                name={person.name}
                photo={person.photo}
                age={person.age}
                bio={person.bio}
            />
            <div>
                <IconButton
                    onClick={() => { discardPerson(person.id) }}
                    sx={{
                        border: '3px solid',
                        borderColor: '#fc1a1a',
                        width: 'fit-content',
                        color: '#fc1a1a',
                        marginTop: '10px',
                        marginBottom: '10px',
                        '&:hover': {
                            borderColor: '#791425',
                            color: '#791425',
                            backgroundColor: '#fc1a1a9e'
                        }
                    }}

                >
                    <Discard fontSize="inherit"/>
                </IconButton>
                <IconButton 
                onClick={() => { likePerson(person.id) }}
                sx={{
                    border: '3px solid',
                    borderColor: '#8de0a6',
                    width: 'fit-content',
                    color: '#8de0a6',
                    marginTop: '10px',
                    marginBottom: '10px',
                    '&:hover': {
                        borderColor: '#538a64',
                        color: '#538a64',
                        backgroundColor: '#8de0a6'
                    }
                }}
                >
                    <Like fontSize="inherit"/>
                </IconButton>
            </div>

        </MatchContainer>
    );
}