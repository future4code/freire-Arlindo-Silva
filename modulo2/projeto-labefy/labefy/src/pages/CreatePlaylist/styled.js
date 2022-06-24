import styled from "styled-components";

export const CreateContainer = styled.div`
    max-height: 100vh;
    width: 100vw;
    background-color: #6e2f02;
    display: grid;
    grid-template-rows: 20vh 60vh 20vh;
    align-items: center;
    text-align: center; 
    & img{
        justify-self: center;
        width: 70%;
    }
    & nav{
        border-end-end-radius: 50px;
        border-top-right-radius: 50px;
        background-color: #fc6a00;
        justify-self: flex-start;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 5px;
        gap: 20px;
        padding-left: 10vw;
    }
    & label{
        color: black;
        padding-bottom: 5px;
        margin: 0 20px;
    }
    & label:hover{
        opacity: 70%;
        border-bottom: 2px solid black;
    }
    &Footer{
        color: #fc6a00;
    }
    & div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        border-radius: 30px;
        width: 300px;
        height: 300px;
        background-color: black;
        & h2{
            color: #fc6a00;
        }
        & span{
            margin: 0 auto;
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            & button{
                width: 25%;
                background-color: #fc6a00;
                padding: 5px;
                border-radius: 20px;
                font-weight: bold;
                &:hover{
                    opacity: 70%;
                    color: white;
                }
            }
            & input{
                color: white;
                padding: 5px;
                width: 100%;
                border-radius: 100px;
                border: 2px solid #6e2f02;
                background-color: black;
            }
        }
    }
`
