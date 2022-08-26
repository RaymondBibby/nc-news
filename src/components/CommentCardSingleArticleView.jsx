import { UserContext } from "../contexts/User"
import { useContext, useState} from "react"
import { deleteCommentByCommentId } from "../API/api"

const CommentCardSingleArticleView = ({comment, setIsLoading}) => {
    const {user} = useContext(UserContext)
    const {votes, created_at, author, body, comment_id} = comment
    const [disable, setDisable] = useState(false)

    const handleDeleteComment = () => {
        deleteCommentByCommentId(comment_id)
    }

    if (comment.author === user) {
        return (
            <>
           <section>
               <div className="commentBody">
                   {comment.body}
               </div>
               <section className="commentInfoBox">
                   <ul className="commentInfo">
                       <li>Comment Votes: {votes}</li>
                       <li>
                           Comment Posted: {created_at.slice(0,10)}
                       </li>
                       <li>
                           Author: {author}
                           <button 
                           disabled={disable}
                           name="deleteCommentButton"
                           onClick={()=> {
                            setDisable(true)
                            setIsLoading(true)
                            handleDeleteComment()
                           }}
                           >Delete Comment
                           </button>
                       </li>
                   </ul>
               </section>
            </section>
            </>
       )
    }
         return (
             <>
             
            <section>
                <div className="commentBody">
                    {body}
                </div>
                <section className="commentInfoBox">
                    <ul className="commentInfo">
                        <li>Comment Votes: {votes}</li>
                        <li>
                            Comment Posted: {created_at.slice(0,10)}
                        </li>
                        <li>
                            Author: {author}
                        </li>
                    </ul>
                </section>
             </section>
             </>
        )

    }



export default CommentCardSingleArticleView