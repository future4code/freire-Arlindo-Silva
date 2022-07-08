import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import Card from "../../components/Card/Card";
import SiteHeader from "../../components/Header/Header";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Like from '@mui/icons-material/FavoriteBorder';
import Discard from '@mui/icons-material/Clear';
import heart from '../../constants/heart.png'
import "./styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MatchContainer = styled.div`
    border: 1px solid #be80ff;
    background-color: #9061c211;
    border-radius: 20px;
    height: 500px;
    width: 350px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 50px 1fr 0px 80px;
    justify-content: center;
    align-items: center;
    & :last-child{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

export default function Match(props) {

    const [person, newPerson] = useState('')

    useEffect(() => {
        getPerson()
    }, [])

    const notify = () => {
        toast('Uh Uh Deu Match!!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }

    async function getPerson() {
        try {
            const response = await axios.get(`${url}/person`)
            if (response.data.profile !== null) {
                newPerson(response.data.profile)
            }            
        } catch (error) {
            
        }
    }

    async function likePerson(id) {
        newPerson('')
        try {
            const body = {
                id: `${id}`,
                choice: true
            }
            const response = await axios.post(`${url}/choose-person`, body)
            if (response.data.isMatch === true) {
                notify()
            }
            getPerson()
            props.getMatches()
        } catch (error) {
        }
    }

    async function discardPerson(id) {
        newPerson('')
        try {
            const body = {
                id: `${id}`,
                choice: false
            }            
            await axios.post(`${url}/choose-person`, body)
            getPerson()
            props.getMatches()
        } catch (error) {
        }
    }

    return (
        <MatchContainer>            
            <SiteHeader rightButton='matches' changeScreen={props.changeScreen} />
            {(person != '') ?
                <Card
                    name={person.name}
                    photo={person.photo}
                    age={person.age}
                    bio={person.bio}
                />
                :
                <img src={heart} className="pulse"></img>
            }            
            <ToastContainer/>
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
                    }}

                >
                    <Discard fontSize="inherit" />
                </IconButton>
                <IconButton
                    onClick={() => { likePerson(person.id) }}
                    sx={{
                        border: '3px solid',
                        borderColor: '#74b989',
                        width: 'fit-content',
                        color: '#74b989',
                        marginTop: '10px',
                        marginBottom: '10px',
                    }}
                >
                    <Like fontSize="inherit" />
                </IconButton>
            </div>
        </MatchContainer>
    );
}