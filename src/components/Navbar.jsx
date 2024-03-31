import {Link} from 'react-router-dom'
import "./Navbar.css" 

function Navbar() {
    return (
        <nav className="navbar">
          <Link to="/">
           <img src="../src/assets/home-icon.png" alt='homeimg'/>
          </Link>
        </nav>
    )

}

export default Navbar;
