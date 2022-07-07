import styled from "styled-components";

const CardContainer = styled.div`
    box-shadow: 0 0 1em #9061c2;
    width: 250px;
    height: 370px;
    gap: 5px;
    border-radius: 10px;
    position: relative;
    & > img{
        border-radius: 9px;
        background-color: #9061c26f;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

 

const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 120px;
    position: absolute;
    bottom: 0;
    color: white;
    text-shadow: 0 0 10px #000000;
    & > h4{
        margin: 0;
        padding: 0;
        text-align: left;
        width: 250px;
        padding-left: 10px;
        padding-top: 5px;
        height: 30px;
        position: absolute;
        top: 0;
    }
    & > p{
        padding: 0;
        margin: 0;
        max-width: 250px;
        padding-left: 5px;
        font-size: 14px;
        position: absolute;
        left: 0;
    }
`

const NomeIdade = styled.h4`
`

export default function Card(props) {
  return (
    <CardContainer>
        <img src={props.photo} alt={props.name} />
        <ProfileInfo>
            <NomeIdade>{props.name}, {props.age}</NomeIdade>
            <p>{props.bio}</p>
        </ProfileInfo>      
        
    </CardContainer>
  );
}