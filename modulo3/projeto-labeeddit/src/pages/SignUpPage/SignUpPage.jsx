import React from "react"
import Header from "../../components/Header/Header"
import { ScreenContainer } from "./styled"
import SignUpForm from "./SignUpForm"


const SignUpPage = () => {
    return(
        <ScreenContainer>
            <Header/>
            <h1>
                Olá, seja bem vinde ao LabEddit
            </h1>
            <SignUpForm/>

        </ScreenContainer>        
    )
}

export default SignUpPage