import { useEffect, useState } from "react"


const CommentCardSingleArticleView = ({comment}) => {
    console.log(comment);

         return (
             <>
             
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
             </section>
             </>
        )

    }



export default CommentCardSingleArticleView