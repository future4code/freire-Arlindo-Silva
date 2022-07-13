import logo from '../constants/logo.svg'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { changePages } from '../routes/coordinator';

const HeaderContainer = styled.div`
    height: 25vh;
    display: grid;
    grid-template-rows: 1fr 1px 10vh;
    padding: 0 10px;
    & > div{        
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > img{
            width: 100px;
        }
        & > button{
            background-color: black;
            color: white;
            padding-bottom: 1px;
        }
    }
    & > button{
        align-self: center;
        justify-self: flex-start;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }
`

export default function Header() {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="logo" />
                <button>Ajuda</button>
            </div>
            <hr />
            <button onClick={() => {changePages(navigate, -1)}}>Voltar</button>
        </HeaderContainer>
    );
  }
