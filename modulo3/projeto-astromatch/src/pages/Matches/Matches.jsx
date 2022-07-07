import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import SiteHeader from "../../components/Header/Header";
import styled from "styled-components";
import { Input, TextField } from "@mui/material";


const MatchesContainer = styled.div`
    border: 1px solid #be80ff;
    background-color: #9061c211;
    border-radius: 20px;
    height: 500px;
    width: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 50px 60px 1fr;
    justify-content: center;
    align-items: center;
    & > input{
        height: 30px;
    }
`
const MatchesList = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 5px;
    color: #525252;
    & > div{
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: 10px;
        width: 100%;
        align-items: center;
        & > img{
            border-radius: 100px;
            width: 40px;
            height: 40px;
            object-fit: cover;
            top: 0;
        }
    }
`

export default function Matches(props) {
    const [filter, setFilter] = useState('')

    const onSearch = (ev) => {
        setFilter(ev.target.value)
    }

    return (
        <MatchesContainer>
            
            <SiteHeader 
            leftButton='match' 
            changeScreen={props.changeScreen}
            reset={props.reset}
            />       
            <TextField 
            size="small" 
            placeholder="Pesquisar" 
            value={filter} 
            onChange={onSearch}
            />
            <MatchesList>
                
                {props.matches
                .filter(match => {
                    return match.name.toLowerCase().includes(filter.toLowerCase())
                })
                .map(match => {
                    return(
                        <div>
                            <img src={match.photo} alt="" />
                            <p key={match.id}>{match.name}</p> 
                        </div>                        
                    )
                })}
            </MatchesList>
        </MatchesContainer>
    );
}