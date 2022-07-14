import Header from "../header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/Data"
import { useNavigate } from 'react-router-dom';


const AdminHomePageContainer = styled.div`
    background-color: #1a9da6;
    min-height: 100vh;

`

export default function AdminHome() {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token === '') {
            console.log("Não está logado!!!");
            navigate("/login");
        }
    })
    return (
        <AdminHomePageContainer>
            <Header/>
        </AdminHomePageContainer>
    );
  }
