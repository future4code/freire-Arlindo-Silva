import styled from "styled-components";

export const PlaylistsContainer = styled.div`
    width: 100vw;
    min-height: 100VH;
    background-color: #6e2f02;
    display: grid;
    grid-template-rows: 20vh 1fr 20vh;
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
    &Footer{
        color: #fc6a00;
    }
    & div{
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-weight: 500;
        font-size: 20px;
        text-align: left;
        margin: 0 auto;
        width: 300px;
        margin-bottom: 50px;
        & label{
            text-align: center;
            font-size: 40px;
            border-radius: 100px;
            background-color: #fc6a00;
            padding: 5px;
            &:hover{
                opacity: 70%;
            }
        }
        & span{
            display: grid;
            grid-template-columns: 1fr 30px;
            background-color: #fc6a00;
            border: none;
            border-radius: 100px;
            padding: 10px 15px;
            & button{
                background-color: #fc6a00;
                width: 100%;
                text-align: left;
                border: none;
                font-size: 20px;
            }
            &:hover{
                color: white;
                border: 2px solid white;
            }
            & input{
                background-color: red;
                color: white;
                border: none;
                padding: 5px;
                border-radius: 1000px;
                font-weight: bold;
                &:hover{
                    opacity: 60%;
                    border: 1px solid red;
                }
                &:active{
                    opacity: 100%;
                    border: 1px solid white;
                }
            }
           
        }
    }
`

export const Delete = styled.button`
    width: 50px;
    background-color: aliceblue;
`

export const LabelNav = styled.label`
    color: black;
    padding-bottom: 5px;
    margin: 0 20px;
    &:hover{
        opacity: 70%;
        border-bottom: 2px solid black;
    }
`

