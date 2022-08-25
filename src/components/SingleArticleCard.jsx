import CommentCardSingleArticleView from "./CommentCardSingleArticleView"
import { useEffect, useState } from "react"
import { fetchCommentsById } from "../API/api"


const SingleArticleCard = ({article}) => {

   const {title, topic, author, body, comment_count, created_at, votes, article_id} = article
 
     const handleVoteClick = (event) => {
        const target = event.target.innerText
       
        event.preventDefault()
     }

     const [comments, setComments] = useState({})
     const [isLoading, setIsLoading] =useState(true)
 
     useEffect(()=> {
         fetchCommentsById(article_id)
         .then(({comments}) => {
             setComments(comments)
         setIsLoading(false)
         })

         console.log(comments);
         
         
        
     }, [article_id])

     console.log(comments);
 
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
            <p>Number of votes: {votes}</p>
            <button type="submit" onClick={event => {
                    handleVoteClick(event)
                }}>
                Upvote 
            </button>
            <button type="submit" onClick={event => {
                // handleVoteClick(event)
            }}>
                    Downvote
            </button>
        </section>
        <section className="commentCard">
        <div>
                <h1 className="commentCardHeader">Comments
                </h1>
            </div>
            {comments.map((comment)=> {
                return <CommentCardSingleArticleView comment={comment} />
            })}
            </section>
        
    </div>
    )
}

export default SingleArticleCard