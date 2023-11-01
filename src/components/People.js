import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../People.css';
function People(){
    const [people, setPeople] = useState([""]);

    const fetchPeople = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
  
      setPeople(response.data.results);
    }, [setPeople]);
  
    useEffect(() => {
      fetchPeople();
    }, [fetchPeople]);

    const renderedImages = people.map((person) => {
        return (
        <div className="people-container" key={Math.random()*667567}>
        
        <div key={person.name} className="content-name">
            <p>Name: {person.name ? person.name : 'loading'}</p>
        </div>
        <div key={person.gender} className="content-gender">
            <p>Gender: {person.gender ? person.gender : 'loading'}</p>
        </div>
        <div key={person.skin_color} className="content-skin">
            <p>Skin Color: {person.skin_color ? person.skin_color : 'loading'}</p>
        </div>
        <div key={person.birth_year} className="content-birth">
            <p>Birth Year: {person.birth_year ? person.birth_year : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer" id="cover">Star Wars Characters</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )
}

export default People;