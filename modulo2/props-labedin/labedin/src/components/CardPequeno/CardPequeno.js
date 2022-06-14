import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    gap: 5px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: left;
`
const ImgIcon = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    gap:10px;
`

const Img = styled.img `
    width: 50px;
`

const Titulo = styled.p`
    font-weight: bold;
`

export default function CardPequeno(props) {
    return (
        <Container>
            <ImgIcon>
                <Img src={ props.imagem } />
                <Titulo>{ props.tipoDado }</Titulo>
            </ImgIcon>
            <div>
                <p>{ props.dado }</p>
            </div>
        </Container>
    )
}