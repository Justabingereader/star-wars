import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../Planets.css';
function Planets(){
    const [planets, setPlanets] = useState([""]);

    const fetchPlanets = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/planets/');
  
      setPlanets(response.data.results);
    }, [setPlanets]);
  
    useEffect(() => {
      fetchPlanets();
    }, [fetchPlanets]);

    const renderedImages = planets.map((planet) => {
        return (
        <div className="planet-container" key={Math.random()*998789}>
        
        <div key={planet.name} className="content-name">
            <p>Name: {planet.name ? planet.name : 'loading'}</p>
        </div>
        <div key={planet.climate} className="content-climate">
            <p>Climate: {planet.climate ? planet.climate : 'loading'}</p>
        </div>
        <div key={planet.population} className="content-population">
            <p>Total Population: {planet.population ? planet.population : 'loading'}</p>
        </div>
        <div key={planet.surface_water} className="content-surface">
            <p>Surface Water: {planet.surface_water ? planet.surface_water : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer">Star Wars Planets</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )
}

export default Planets;