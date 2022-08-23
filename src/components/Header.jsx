import Navbar from "./NavBar"
import logo from "../logo.png"

const Header = () => {
    return (
        <section className="header">
            <img id="newsSiteLogo" alt="News site logo" src={logo}/>
            <Navbar className="navbar"/>

        </section>
    )
}

export default Header