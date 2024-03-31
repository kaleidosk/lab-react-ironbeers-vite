import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"


function AllBeersPage() {
    const [beers, setBeers] = useState([])

    const getAllBeers = () => {
        axios
          .get(`${API_URL}/api/beers`)
          .then((response) => setBeers(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(()=>{
        getAllBeers()
      },[])

      return (
        <div className="AllBeersPage">          
          <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>Details</Link>
            </div>
          </li>
        ))}
      </ul>
        </div>
      );
}

export default AllBeersPage;
