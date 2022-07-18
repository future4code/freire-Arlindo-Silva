import styled from 'styled-components';
import linkedin from '../constants/linkedin.png'
import github from '../constants/github.png'

const FooterContainer = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    box-shadow: 0 0 1em #000000;
    color: white;
    & > p{
        margin-left: 20px;
    }
    & > div{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 20px;

    }
`

const Logo = styled.img`
    height: 25px;
`

export default function Footer() {
    
    return (
        <FooterContainer>
            <p>© LabeX </p>
            <div>
                <a href="https://www.linkedin.com/in/arlindo-vin%C3%ADcius-amado-nascimento-silva-714079184/" target="_blank"><Logo src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/vinyperroni" target="_blank"><Logo src={github} alt="github" /></a>
            </div>
        </FooterContainer>
    );
  }
