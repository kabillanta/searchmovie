import { Link } from "react-router-dom"
import '../css/NavBar.css'
function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">CineScope </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourite Movies</Link>
            </div>
        </nav>
    )
}

export default NavBar