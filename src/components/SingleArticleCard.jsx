import { useState } from "react"  
import { patchVotesByArticleId } from "../API/api"      

const SingleArticleCard = ({article}) => {

    const {title, topic, author, body, comment_count, created_at, votes, article_id} = article
 

    const [voteCount, setVoteCount] = useState(votes)
    const [err, setErr] = useState(null)

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
        
    </div>
    )
}

export default SingleArticleCard