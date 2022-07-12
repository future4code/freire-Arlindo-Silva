import logo from '../constants/logo.svg'
import styled from 'styled-components';
import background from '../constants/background.jpg'

const HomeContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${background}) ;
    background-size: cover;
    & > div{
        box-shadow: 0 0 1em #d1f7ff;
        width: 90vw;
        height: 90vh;
        background-color: black;
        display: grid;
        grid-template-rows: 300px 1fr;
        align-items: center;
        position: absolute;
        bottom: 0;
        border-radius: 50px 50px 0px 0px;
        & > img{
            justify-self: center;
            height: 100%;
        }
    }


`


export default function Home() {
    return (
        <HomeContainer>
           
        <div>
            <img src={logo} alt="" />
            <div>
            </div> 
        </div>   
         
            
            
        </HomeContainer>
    );
  }
