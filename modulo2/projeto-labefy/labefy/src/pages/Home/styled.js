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
        border-end-end-radius: 50px;
        border-top-right-radius: 50px;
        background-color: black;
        justify-self: flex-start;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 5px;
        gap: 20px;
        padding-left: 10vw;
    }
    & label{
        color: #fc6a00;
        padding-bottom: 5px;
        margin: 0 20px;
    }
    & label:hover{
        opacity: 70%;
        border-bottom: 2px solid #fc6a00;
    }
`