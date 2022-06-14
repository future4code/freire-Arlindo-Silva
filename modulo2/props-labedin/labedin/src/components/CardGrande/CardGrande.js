import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Img = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const H4 = styled.h4 `
    margin-bottom: 15px;
`
const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`


export default function CardGrande(props) {
    return (
        <Container>
            <Img src={props.imagem}/>
            <Descricao>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </Descricao>
        </Container>
    )
}
