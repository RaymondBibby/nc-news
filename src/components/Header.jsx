import Navbar from "./NavBar"
import logo from "../logo.png"
import { useContext } from "react"
import { UserContext } from "../App"


const Header = () => {
    // const {user, setUser} = useContext(UserContext)

    return (
        <section className="header">
            <img id="newsSiteLogo" alt="News site logo" src={logo}/>
            <Navbar className="navbar"/>

        </section>
    )
}

export default Header