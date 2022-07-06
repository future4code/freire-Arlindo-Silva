import styled from "styled-components";

const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 220px 30px 50px;
    width: 200px;
    height: 300px;
    gap: 5px;
    & > img{
        width: 100%;
        height: 100%;
        justify-self: center;
        align-self: center;
        object-fit: cover
    }
    & > p{
        font-size: 13px;
    }
`

export default function Card(props) {
  return (
    <CardContainer>
        <img src={props.photo} alt={props.name} />
        <h4>{props.name}, {props.age}</h4>
        <p>{props.bio}</p>
    </CardContainer>
  );
}