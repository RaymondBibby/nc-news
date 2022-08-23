

const SingleArticleCard = ({article}) => {

   const {title, topic, author, body, comment_count, created_at, votes} = article
 
     const handleVoteClick = (event) => {
        const target = event.target.innerText
       
        event.preventDefault()
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
        
    </div>
    )
}

export default SingleArticleCard