import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setIsLoading, getPosts, navigate) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        navigate("/1")
        clear()
        setIsLoading(false)
        getPosts("1")
        
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
}

export const votePost = () => {

}