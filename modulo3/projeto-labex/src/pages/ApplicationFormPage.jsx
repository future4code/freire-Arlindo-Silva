import Header from "../header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/Data"

const ApplicationFormPageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;

`

export default function ApplicationForm() {
    return (
        <ApplicationFormPageContainer>
            <Header/>
            
        </ApplicationFormPageContainer>
    );
  }
