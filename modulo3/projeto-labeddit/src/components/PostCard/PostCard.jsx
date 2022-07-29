import React from "react"
import { CardContainer, Comments, Votes } from "./styled"
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"
import comment from "../../assets/comment.svg"

const PostCard = (props) => {
    return(
        <CardContainer>
            <p>Enviado por: {props.post && props.post.username}</p>
            <p id="comment">{props.post && props.post.body}</p>
            <div>
                <Votes>
                    <img src={up} alt="vote" />
                    <p>{props.post && ((props.post.userVote === null)? 0 : props.post.userVote)}</p>
                    <img src={down} alt="unVote" />
                </Votes>
                <Comments>
                <img src={comment} alt="" />
                <p>{props.post && ((props.post.commentCount === null)? 0 : props.post.commentCount)}</p>
                </Comments>
            </div>
        </CardContainer>
    )
}

export default PostCard