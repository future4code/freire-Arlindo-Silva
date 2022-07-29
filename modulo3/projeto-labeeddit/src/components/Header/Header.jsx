import logo from "../../assets/logo-header.svg"
import { HeaderContainer } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Header = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    

    const logOut = () => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    return(
        <HeaderContainer>            
            <img src={logo} alt="" />
            {(token && token.length > 0) 
            ?
            <Button 
            onClick={logOut}
            >Sair</Button>
            :
            <Button
            onClick={() => {goToLoginPage(navigate)}}
            >
                Entrar
            </Button>
        }
        </HeaderContainer>
    )
}

export default Header