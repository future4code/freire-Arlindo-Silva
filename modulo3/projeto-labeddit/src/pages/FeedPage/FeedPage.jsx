import React, { useEffect, useState} from "react"
import Header from "../../components/Header/Header"
import { ScreenContainer, PostsContainer } from "./styled";
import NewPost from "./NewPost";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate, useParams } from "react-router-dom";
import { protectedPage } from "../../routes/protectedPage";
import axios from "axios";


const FeedPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState()
    const params = useParams()
    const nextPage = Number(params.page) + 1
    const prevPage = Number(params.page) - 1

    const getPosts = (page) => {          
        setPosts([])
        axios.get(`${BASE_URL}/posts?page=${page}&size=10` , {
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("token")
            }
          })
            .then((response) => {
              setPosts(response.data)
            })
            .catch((error) => {
              console.log(error.response.data)
            }) 
        }

    const updatePage = (page) => {
        navigate(`/${page}`)        
        getPosts(`${page}`)
    }

    useEffect(() => {
       protectedPage(navigate)
       getPosts(params.page)
    }, [params])
    
          return(
        <ScreenContainer> 
            <Header/>
            <NewPost getPosts={getPosts}/>
            <hr />
            <PostsContainer>
                {posts && posts.map(post => {return <PostCard key={post.id} post={post}/>})}                 
            </PostsContainer>
            <button onClick={() => updatePage(`${prevPage}`)}>Anterior</button>
            <p>Page: {params.page}</p>
            <button onClick={() => updatePage(`${nextPage}`)}>Pular</button>
                      
            
        
        </ScreenContainer>
        
    )
        
}

export default FeedPage