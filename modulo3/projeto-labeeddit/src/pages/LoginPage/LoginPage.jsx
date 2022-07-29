import React from "react"
import logo from "../../assets/logo.svg"
import text from "../../assets/text.svg"
import line from "../../assets/line-gradient.svg"
import { ScreenContainer, Line, LogoImage, SignUpButtonContainer } from "./styled"
import LoginForm from "./LoginForm"
import { Button } from "@mui/material"
import { goToSignUpPage } from "../../routes/coordinator"
import { primaryColor, secundaryColor } from "../../constants/colors"
import { useNavigate } from "react-router-dom"



const LoginPage = () => {
    const navigate = useNavigate()
    return(
        <ScreenContainer>
            <LogoImage src={logo} />
            <img src={text} alt="" />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                onClick={() => goToSignUpPage(navigate)}
                fullWidth
                variant={"outlined"}
                    sx={{
                        textTransform: 'none',  
                        borderRadius: '100px',
                    }}
                >Crie uma conta</Button>
            </SignUpButtonContainer>
        </ScreenContainer>


    )
}

export default LoginPage

         
