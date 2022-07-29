import React, { useState } from "react"
import Header from "../../components/Header/Header"
import { ScreenContainer, NewPostContainer, PostsContainer } from "./styled";
import { TextField, Button } from "@mui/material";
import { primaryColor, secundaryColor } from "../../constants/colors"
import CircularProgress from '@mui/material/CircularProgress'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCard from "../../components/PostCard/PostCard";


const FeedPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts);
    return(
        <ScreenContainer> 
            <Header/>
            <NewPostContainer>
            <TextField
                    id="outlined-multiline-static"
                    placeholder="Titulo"
                    
                    sx={{
                        background: "#EDEDED",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        "fieldset":{
                            borderRadius: "20px",
                            border: "none",
                        }
                    }}
                />

                <TextField
                    id="outlined-multiline-static"
                    placeholder="Digite seu post aqui..."
                    multiline
                    rows={6}
                    
                    sx={{
                        background: "#EDEDED",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        "fieldset":{
                            borderRadius: "20px",
                            border: "none",
                        }
                    }}
                />
                <Button                    
                    variant={"contained"}        
                    sx={{
                        textTransform: 'none',                
                        borderRadius: '100px',
                        backgroundImage: `linear-gradient(to right, ${secundaryColor} 0%, ${primaryColor}  51%, ${secundaryColor}  100%)`,
                        transition: '0.5s',
                        backgroundSize: '200% auto',
                        '&:hover': {
                            backgroundPosition: 'right center',
                            textDecoration: 'none',
    
                        }
                    }}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
                </Button>
                
            </NewPostContainer>
            <hr />
            <PostsContainer>
                {posts && posts.map(post => {return <PostCard post={post}/>})}
                 
            </PostsContainer>
                      
            
        
        </ScreenContainer>
        
    )
        
}

export default FeedPage