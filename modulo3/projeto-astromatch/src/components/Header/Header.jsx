import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Restart from '@mui/icons-material/RestartAlt';
import People from '@mui/icons-material/People';
import PersonAdd from '@mui/icons-material/PersonAdd';

const Header = styled.header`
    color: #be80ff;
    text-align: center;
    width: 250px;
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
    text-shadow: 0 0 10px #0000002d;
    & > button{
        width: 30px;
        height: 30px;
    }
`

export default function SiteHeader(props) {

    let leftButton

    switch (props.leftButton) {
        case 'matches':
            leftButton = <People />
            break;
        case 'match':
            leftButton = <PersonAdd />
            break;
        default:
            leftButton = <PersonAdd />
            break;
    }

    return (
        <Header>
            <IconButton
            size="small"
            onClick={props.reset}
            >
                <Restart/>
            </IconButton>
            <h3>ASTROMATCH</h3>
            <IconButton
            onClick={props.changeScreen}
            >
                {leftButton}                
            </IconButton>       
        </Header>
);
}