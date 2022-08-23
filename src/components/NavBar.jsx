import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <section className="navbarSection">
            <Link to={`/`}><button>Home</button></Link>
            <Link to={`/api/articles`}><button>Articles</button></Link>
            <Link to={`/api/users`}><button>Users</button></Link>
        </section>
        </>
    )
}

export default Navbar