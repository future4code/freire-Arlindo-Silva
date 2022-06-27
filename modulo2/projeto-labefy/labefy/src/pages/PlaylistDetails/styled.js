import styled from "styled-components";

export const PlaylistContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
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
    }
`
export const NavLabel = styled.label`
    color: black;
    padding-bottom: 5px;
    margin: 0 20px;
    &:hover{
        opacity: 70%;
        border-bottom: 2px solid black;
    }

`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    border-radius: 30px;
    min-width: 300px;
    height: 300px;
    background-color: #fc6a00;
    width: 300px;
    margin: 0 auto;
    border-radius: 50px;
    padding-bottom: 16px;
    & h1{
        margin-bottom: 10px;
    }
    & div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        & input{
            padding: 2px;
        }
       
    }
`

export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: #fc6a00;
    width: 300px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    margin-bottom: 50px;
`

export const SongContainer = styled.label`
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 25px;
    padding: 10px;
    text-align: left;
    align-items: center;
    gap: 5px;
    
    & p{
        text-align: left;
        padding-left: 10px;
        font-weight: bold;
    }
    & audio{
        height: 30px;
        width: 100%;
    }
    & :last-child{
        background-color: red;
        color: white;
        border: none;
        font-weight: bold;
        &:hover{
            opacity: 70%;
        }
    }
`
export const Button = styled.button`
    padding: 5px;
    margin: 10px 0px;
    border-radius: 50px;
    border: none;
    background-color: black;
    color: #fc6a00;
    align-self: center;
    &:hover{
            opacity: 50%;
    }

`
