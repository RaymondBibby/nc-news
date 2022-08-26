import { useEffect, useState } from "react"
import { fetchTopics } from "../API/api"
import TopArticle from "./TopArticle"
import { Link } from "react-router-dom"

const Homescreen = () => {
    const [topics, setTopics] = useState([])

    useEffect(()=> {
        fetchTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])

    return (
        <>
        <section>
                <h1>Browse by topics:</h1>
                <p className="topicButton">
                {topics.map((topic, index)=> {
                    return (
                        <Link to={`/api/articles/topics/${topic.slug}`}>
                            <button key={`topicButton${index}`}>
                                
                                {topic.slug}
                            </button>
                        </Link>
                    )
                })}
                </p>

            </section>
            <section>
                <h1>Featured No.1 Article!</h1>
                <h3>Feature to be added!</h3>
                <TopArticle />
            </section>
            
        </>
    )
}

export default Homescreen