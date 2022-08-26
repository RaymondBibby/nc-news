import { Link } from "react-router-dom"
import CommentCard from "./CommentCard"
import { patchVotesByArticleId } from "../API/api"
import { useState } from "react"

const ArticleCard = ({article}) => {
    const {votes} = article
    const [voteCount, setVoteCount] = useState(votes)
    const [err, setErr] = useState(null)

  if (article === undefined) {
      return <></>
  } else {
    const {article_id, title, topic, author, body, comment_count, created_at} = article

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
    
    if (err) return <p>{err}</p>
    
    return (
        <div className="articleCard">
            <Link to={`/api/articles/${article_id}`}>

            <h2 className="articleCard__title">{title}</h2>
            <section className="articleCard__info--inline">
                <p>Topic: {topic}</p>
                <p>Article Date: {created_at.slice(0,10)}</p>
                <p>Author: {author}</p>
            </section>
            <section>
                <p className="articleCard__body--wrap">
                  {body.slice(0,180)}...........
                </p>
            </section>
            
            </Link>
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
            
        </div>
    )
    }
}

export default ArticleCard