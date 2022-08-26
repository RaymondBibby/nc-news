import SingleArticleCard from "./SingleArticleCard"
import { useEffect, useState } from "react"
import { fetchArticleById } from "../API/api"
import { useParams } from "react-router-dom"
import CatchAll from "./CatchAll"


const ArticlesById = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] =useState(true)
    
  
    
    
    useEffect(()=> {
        fetchArticleById(article_id)
        .then(({article})=> {
            setIsLoading(false)
            setArticle(article)
        })
        .catch((err)=> {
            alert(`${err.response.data.msg}`)
        })

    }, [article_id])
   
    if(isLoading === false) {
        return (
        <SingleArticleCard article={article} />
        )
    }
}

export default ArticlesById