import { useEffect, useState } from "react"
import { fetchCommentsById, postCommentById } from "../API/api"

const CommentCard = ({article_id}) => {

    const [comment, setComments] = useState({})
    const [isLoading, setIsLoading] =useState(true)

    useEffect(()=> {
        fetchCommentsById(article_id)
        .then(({comments})=> {
            const comment = comments.reduce((prev, curr) => {
                return prev.comment_id > curr.comment_id ? prev : curr
            })
        setComments(comment)
        setIsLoading(false)
        })
        
    }, [article_id])

    
    const handleCommentSubmit = (event) => {
        event.preventDefault()
        const commentToPost = event.target[0].value;

        postCommentById(article_id, commentToPost, "jessjelly")
        .then((resp)=> {
            
        })
        .catch((err)=> {
           
        })

        

    }


    if (isLoading === true) {
        return <>...Loading Comments</>
    }
     else if (isLoading === false) {
        return (
            <>
            <div>
               <h1 className="commentCardHeader">Comments
               </h1>
           </div>
           <section>
               <div className="commentBody">
                   {comment.body}
               </div>
               <section className="commentInfoBox">
                   <ul className="commentInfo">
                       <li>Comment Votes: {comment.votes}</li>
                       <li>
                           Comment Posted: {comment.created_at.slice(0,10)}
                       </li>
                       <li>
                           Author: {comment.author}
                       </li>
                   </ul>
               </section>
               <div className="commentInput">
                   <form 
                   onSubmit={event => {
                       handleCommentSubmit(event)
                   }}
                   className="commentInput_Box"
                   >
                   <textarea 
                   className="commentText"
                   name="commentText"
                   type="text" ></textarea>
                   
                   <button className="commentSubmitButton">Post Comment</button>
                   </form>
               </div>
           </section>
           </>
        ) 
    } 
}

export default CommentCard