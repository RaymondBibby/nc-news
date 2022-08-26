import Navbar from "./NavBar"
import logo from "../logo.png"
import { UserContext } from "../contexts/User"
import { useContext } from "react"

const Header = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <section className="header">
            <img id="newsSiteLogo" alt="News site logo" src={logo}/>
            <Navbar className="navbar" loggedIn={user} />

        </section>
    )
}

export default Header