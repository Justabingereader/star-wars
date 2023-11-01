import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../Starships.css';
function Starships(){
    const [starships, setStarships] = useState([""]);

    const fetchStarships = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/starships/');
  
      setStarships(response.data.results);
    }, [setStarships]);
  
    useEffect(() => {
      fetchStarships();
    }, [fetchStarships]);

    const renderedImages = starships.map((starship) => {
        return (
        <div className="starships-container" key={Math.random()*9998988546}>
        
        <div key={starship.name} className="content-name">
            <p>Name: {starship.name ? starship.name : 'loading'}</p>
        </div>
        <div key={starship.manufacturer} className="content-man">
            <p>Manufacturer: {starship.manufacturer ? starship.manufacturer : 'loading'}</p>
        </div>
        <div key={starship.passengers} className="content-pass">
            <p>Passengers: {starship.passengers ? starship.passengers : 'loading'}</p>
        </div>
        <div key={starship.cost_in_credits} className="content-cost">
            <p>Cost in Credits: {starship.cost_in_credits ? starship.cost_in_credits : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer" id="cover">Star Wars Starships</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )
}

export default Starships;