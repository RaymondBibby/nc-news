import CommentCardSingleArticleView from "./CommentCardSingleArticleView"
import { useState, useEffect } from "react"
import { fetchCommentsById, patchVotesByArticleId, postCommentById  } from "../API/api"


const SingleArticleCard = ({article}) => {

   const {title, topic, author, body, comment_count, created_at, votes, article_id} = article
 

    const [voteCount, setVoteCount] = useState(votes)
    const [err, setErr] = useState(null)
    const [comments, setComments] = useState({})
    const [isLoading, setIsLoading] =useState(true)
    const [bodyTextArea, setBodyTextArea] = useState("")
    

    const handleVoteClickUp = (event) => {
        event.preventDefault()

        setVoteCount((prevVotes) => prevVotes + 1)

        setErr(null);

        patchVotesByArticleId(article_id, 1)
        .catch((err) => {
            setVoteCount((prevVotes) => prevVotes - 1)
            setErr(('Something went wrong with your up-vote! Please try again'))
        })
    }

    const handleVoteClickDown = (event) => {
        event.preventDefault()

        setVoteCount((prevVotes)=> prevVotes - 1)
        
        patchVotesByArticleId(article_id, -1)
        .catch((err)=> {
            setVoteCount((prevVotes)=> prevVotes + 1)
            setErr(('Something went wrong with your down-vote! Please try again'))
        })
        
    }    

    const handleCommentSubmit = (event) => {
        setIsLoading(true)

        if (bodyTextArea.length < 1) {
            return <>Invalid Comment</>
        }

        alert("Comment Posted Succesfully!")
        
        event.preventDefault()
        
        setBodyTextArea("")
        
        postCommentById(article_id, bodyTextArea, "jessjelly").then(()=> {
            setIsLoading(false)

        })
        
    }
 

    const handleBodyChange = (event) => {
        setBodyTextArea(event.target.value)
    }

    useEffect(()=> {
        fetchCommentsById(article_id)
        .then(({comments}) => {
        setComments(comments)
        setIsLoading(false)
        })
        
    }, [article_id, isLoading])


    if (err) return <p>{err}</p>

 
     if (isLoading === true) {
         return <>...Loading Content</>
     }
    return (
        <div className="singleArticleCard">
        <h2 className="articleCard__title">{title}</h2>
        <section className="articleCard__info--inline">
            <p>Topic: {topic}</p>
            <p>Article Date: {created_at.slice(0,10)}</p>
            <p>Author: {author}</p>
        </section>
        <section>
            <p className="articleCard__body--wrap">
              {body} 
            </p>
        </section>
        
        
        <section className="article_card__upvotes--inline">
            <p>Number of votes: {voteCount}</p>
            <button type="submit" onClick={event => {
                    handleVoteClickUp(event)
                }}>
                Upvote 
            </button>

            <button type="submit" onClick={event => {
                handleVoteClickDown(event)
            }}>
                    Downvote
            </button>
        </section>
        <section className="commentCard">
        <div>
                <h1 className="commentCardHeader">Comments
                </h1>
        </div>
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
                   type="text" 
                   value={bodyTextArea}
                   onChange={handleBodyChange}
                   
                   >

                   </textarea>
                   
                   <button className="commentSubmitButton">Post Comment</button>
                </form>
        </div>  
            {comments.map((comment)=> {
                return <CommentCardSingleArticleView comment={comment} key={comment.comment_id}/>
            })}
            </section>
        
    </div>
    )
}

export default SingleArticleCard