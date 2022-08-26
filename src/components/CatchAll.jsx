import { Link } from "react-router-dom"
import pageNotFound from "../pageNotFound.png"

const CatchAll = () => {
    return (
        <>
        <h1>The Page You're Looking For Does Not Exist</h1>
        <img src={pageNotFound} alt="This is not the web page your're looking for spoof"/>
       <Link to={`/`}>
            <button>Return Home</button>
        </Link>
        </>
    )
}

export default CatchAll