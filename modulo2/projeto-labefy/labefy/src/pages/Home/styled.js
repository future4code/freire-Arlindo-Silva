import styled from "styled-components";

export const HomeContainer = styled.div`
    max-height: 100vh;
    width: 100vw;
    background-color: #fc6a00;
    display: grid;
    grid-template-rows: 20vh 60vh 20vh;
    align-items: center;
    text-align: center; 
    & img{
        justify-self: center;
        width: 60%;
    }
    & nav{
        justify-self: flex-start;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0;
        gap: 20px;
        margin-left: 10vw;
    }
    & label{
        padding-bottom: 15px;
        margin-left: 20px;
    }
    & label:hover{
        border-bottom: 2px solid black;
    }
`