import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticlesWithQuery } from "../API/api"
import ArticleCard from "./ArtlicleCard"

const ArticlesByTopic = () => {
    const {topic_slug} = useParams()
    const [queryString, setQueryString] = useState(topic_slug)
    const [articles, setArticles] =useState([])
    const [isLoading, setIsLoading] =useState(true)
    const [err, setErr] = useState(false)

    useState(()=> {
        fetchArticlesWithQuery(queryString)
        .then((articlesObj)=> {
            const {articles} = articlesObj
            setArticles(articles)
            setIsLoading(false)
        })
        .catch(()=> setErr(true))
    }, [queryString])
    

   if(articles.length === 0 && err) {
    return (
        <>
    
        <section> 
            <h2>There Are No Articles On Topic: {topic_slug}:</h2>
            {articles.map((article)=> {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </section>
        </>
    )
} else if (isLoading === true && articles.length === 0) {
        return (
        <>
        ....... Articles are Loading
        </>
        )
    }
    

    return (
        <>
    
        <section> 
            <h2>Articles about {topic_slug}:</h2>
            {articles.map((article)=> {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </section>
        </>
    )
}

export default ArticlesByTopic