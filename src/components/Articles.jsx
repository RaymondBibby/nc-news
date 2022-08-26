import { useEffect, useState } from "react"
import { fetchArticles } from "../API/api"
import ArticlesQuery from "./ArticlesQuery"
import ArticleCard from "./ArtlicleCard"
import { useContext } from "react"
import { UserContext } from "../App"

const Articles = () => {
const [articles, setArticles] = useState([])
const {user, setUser} = useContext(UserContext)


useEffect(()=> {
    fetchArticles().then(({articles})=> {
        setArticles(articles)
    })
}, [])

    return (
        <>
        <div>
           <h1>Articles</h1>
        </div> 
        <ArticlesQuery/>
        <div className="articleCard_wrapper">
        {articles.map((article) => {
                return (
                   <ArticleCard 
                   key={article.article_id}
                   article={article}
                   /> 
                )
        })}
        
        </div>
        </>
    )
}

export default Articles