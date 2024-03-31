import {Link} from "react-router-dom"
import "./HomePage.css"
function HomePage() {
    return (
        <div className= "container">
          <ul>
            <li>
              <img src="../src/assets/beers.png" alt="allBeers"/>
              <Link to="/beers">All Beers</Link>
            </li>
            <li>
              <img src="../src/assets/random-beer.png" alt="randomBeer"/>
              <Link to="/random-beer">Random Beer</Link>
            </li>
            <li>
              <img src="../src/assets/new-beer.png" alt="newBeer" />
              <Link to="/new-beer">New Beer</Link>
            </li>
          </ul>
        </div>
      );
}


export default HomePage;
