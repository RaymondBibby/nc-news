import { useEffect, useState } from "react"
import { fetchArticles } from "../API/api"
import ArticleCard from "./ArtlicleCard"
import QueryMenu from "./QueryMenu"

const Articles = () => {
const [articles, setArticles] = useState([])
const [sortByCat, setSortByCat] = useState("")
const [order, setOrder] = useState("")



useEffect(()=> {
    fetchArticles(order, sortByCat).then(({articles})=> {
        setArticles(articles)
    })
}, [sortByCat, order])

    return (
        <>
        <div>
           <h1>Articles</h1>
        </div> 
        <QueryMenu setOrder={setOrder} order={order} setSortByCat={setSortByCat} sortByCat={sortByCat} />
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