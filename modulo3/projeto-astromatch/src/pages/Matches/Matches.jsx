import React, { useState } from "react";
import SiteHeader from "../../components/Header/Header";
import styled from "styled-components";
import { TextField } from "@mui/material";
import brokenHeart from '../../constants/brokenHeart.png'


const MatchesContainer = styled.div`
    border: 1px solid #be80ff;
    background-color: #9061c211;
    border-radius: 20px;
    min-height: 500px;
    width: 350px;
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
    gap: 10px;
    color: #525252;
    font-weight: 500;
    font-size: 15px;
    & > div{
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: 10px;
        width: 100%;
        align-items: center;
        padding: 3px;
        border-radius: 50px;
        background-color: #bd80ff6e;
        & > img{
            border-radius: 100px;
            width: 40px;
            height: 40px;
            object-fit: cover;
            top: 0;
        }
    }
`
const MatchesEmpty = styled.div`
    display: flex;
    flex-direction: column;
    color: #3a3a3a;
    opacity: 80%;
    align-items: center;
    & > img{
        width: 80%;
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
            rightButton='match' 
            changeScreen={props.changeScreen}
            reset={props.reset}
            />       
            <TextField 
            size="small" 
            placeholder="Pesquisar" 
            value={filter} 
            onChange={onSearch}
            />
            {props.matches.length !== 0 ?
            <MatchesList>
                {filter !== '' 
                ?
                props.matches
                .filter(match => {
                    if (match.name.toLowerCase().includes(filter.toLowerCase())) {
                        return match
                    }
                })
                .map(match => {
                    return(
                        <div key={match.id}>
                            <img src={match.photo} alt="" />
                            <p>{match.name}</p> 
                        </div>                        
                    )
                })
                :
                props.matches
                .map(match => {
                    return(
                        <div>
                            <img src={match.photo} alt="" />
                            <p key={match.id}>{match.name}</p> 
                        </div>                        
                    )
                })
                }                
            </MatchesList>
            :
            <MatchesEmpty>
                <img src={brokenHeart} alt="" />
                <h4>Você não possui matches</h4>
            </MatchesEmpty>
            
            }
        </MatchesContainer>
    );
}