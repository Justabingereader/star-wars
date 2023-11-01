import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../Species.css';
function Species(){
    const [species, setSpecies] = useState([""]);

    const fetchSpecies = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/species/');
  
      setSpecies(response.data.results);
    }, [setSpecies]);
  
    useEffect(() => {
      fetchSpecies();
    }, [fetchSpecies]);

    const renderedImages = species.map((specie) => {
        return (
        <div className="species-container" key={Math.random()*9998989}>
        
        <div key={specie.name} className="content-name">
            <p>Name: {specie.name ? specie.name : 'loading'}</p>
        </div>
        <div key={specie.language} className="content-language">
            <p>Language: {specie.language ? specie.language : 'loading'}</p>
        </div>
        <div key={specie.classification} className="content-classification">
            <p>Classification: {specie.classification ? specie.classification : 'loading'}</p>
        </div>
        <div key={specie.designation} className="content-designation">
            <p>Designation: {specie.designation ? specie.designation : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer" id="cover">Star Wars Species</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )
}

export default Species;