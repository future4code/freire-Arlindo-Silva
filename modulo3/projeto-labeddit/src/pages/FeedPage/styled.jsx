import styled from "styled-components"
import { primaryColor, secundaryColor } from "../../constants/colors"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    & hr{
        width: 90vw;
        max-width: 400px;
        margin: 20px 0;
        height: 1px;
        border: none;
        border-radius: 100px;
        background-image: linear-gradient(to right, ${secundaryColor} 0%, ${primaryColor}  51%, ${secundaryColor}  100%);
    }


`
export const NewPostContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    gap: 1em;    
`

export const PostsContainer = styled.div`
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 1em;
`