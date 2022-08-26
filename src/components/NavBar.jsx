import { Link } from "react-router-dom"

const Navbar = ({loggedIn}) => {
    return (
        <>
        <section className="navbarSection">
            <Link to={`/`}><button>Home</button></Link>
            <Link to={`/api/articles`}><button>Articles</button></Link>
            <Link to={`/api/users`}><button>Users</button></Link>
            <p>Current User:{loggedIn}</p>
        </section>
        </>
    )
}

export default Navbar