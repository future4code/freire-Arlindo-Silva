import styled from "styled-components";

export const CreateContainer = styled.div`
    max-height: 100vh;
    width: 100vw;
    background-color: black;
    display: grid;
    grid-template-rows: 20vh 70vh 10vh;
    align-items: center;
    text-align: center; 
    & img{
        justify-self: center;
        width: 70%;
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
        color: #fc6a00;
        padding-bottom: 15px;
        margin-left: 20px;
    }
    & label:hover{
        border-bottom: 2px solid #fc6a00;
    }
    &Footer{
        color: #fc6a00;
    }
`
