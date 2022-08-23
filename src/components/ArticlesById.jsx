import SingleArticleCard from "./SingleArticleCard"
import { useEffect, useState } from "react"
import { fetchArticleById } from "../API/api"
import { useParams } from "react-router-dom"

const ArticlesById = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] =useState(true)
    // console.log(article_id);
    
    
    useEffect(()=> {
        fetchArticleById(article_id)
        .then(({article})=> {
            setIsLoading(false)
            setArticle(article)
        })

    }, [article_id])
   
if(isLoading === false) {
    return (
      <SingleArticleCard article={article} />
    )

}
}

export default ArticlesById