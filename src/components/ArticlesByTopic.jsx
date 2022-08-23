import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticlesWithQuery } from "../API/api"
import ArticleCard from "./ArtlicleCard"

const ArticlesByTopic = () => {
    const {topic_slug} = useParams()
    const [queryString, setQueryString] = useState(topic_slug)
    const [articles, setArticles] =useState([])

    useState(()=> {
        fetchArticlesWithQuery(queryString)
        .then((articlesObj)=> {
            const {articles} = articlesObj
            setArticles(articles)
        })
    }, [queryString])

    return (
        <>
    
        <section> 
            <h2>Articles about {topic_slug}:</h2>
            {articles.map((article)=> {
                return <ArticleCard article={article}/>
            })}
        </section>
        </>
    )
}

export default ArticlesByTopic