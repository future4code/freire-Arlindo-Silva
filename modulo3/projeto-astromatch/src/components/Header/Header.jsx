import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Restart from '@mui/icons-material/RestartAlt';
import People from '@mui/icons-material/People';
import PersonAdd from '@mui/icons-material/PersonAdd';

const Header = styled.header`
    color: #be80ff;
    text-align: center;
    width: 300px;
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
    text-shadow: 0 0 10px #0000002d;
    & > button{
        width: 30px;
        height: 30px;
    }
`

export default function SiteHeader(props) {

    let rightButton

    switch (props.rightButton) {
        case 'matches':
            rightButton = <People />
            break;
        case 'match':
            rightButton = <PersonAdd />
            break;
        default:
            rightButton = <PersonAdd />
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
                {rightButton}                
            </IconButton>       
        </Header>
);
}