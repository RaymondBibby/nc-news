import { Link } from "react-router-dom"
const ArticleCard = ({article}) => {
  if (article === undefined) {
      return <></>
  } else {
    const {article_id, title, topic, author, body, comment_count, created_at, votes} = article
  
  
    
     const handleVoteClick = (event) => {
        const target = event.target.innerText
       
        event.preventDefault()
     }

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
                  {body.slice(0,260)}......  
                </p>
            </section>
            
            </Link>
            <section className="article_card__upvotes--inline">
                <p>Number of votes: {votes}</p>
                <button type="submit" onClick={event => {
                        handleVoteClick(event)
                    }}>
                    Upvote 
                </button>
                <button type="submit" onClick={event => {
                    handleVoteClick(event)
                }}>
                        Downvote
                </button>
            </section>
            
        </div>
    )
    }
}

/* 
1. Title of article --> title
2. Topic --> topic
3. Date posted --> created_at
4. Body (reduced characters) --> body
5. Votes --> votes
5.5 comment count --> comment_count 
6. Comments (API call required)
7. Add comment --> Button to ppost a comment (to be added)
8.Author--> author
9. Upvotes--> votes
*/

export default ArticleCard