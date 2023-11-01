import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../Films.css';
function Films(){
    const [films, setFilms] = useState([""]);

    const fetchFilms = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/films/');
  
      setFilms(response.data.results);
    }, [setFilms]);
  
    useEffect(() => {
      fetchFilms();
    }, [fetchFilms]);

    const renderedImages = films.map((film) => {
        return (
        <div className="film-container" key={Math.random()*45675}>
        <div key={film.title} className="content-title">
            <p>Title: {film.title ? film.title : 'loading'}</p>
        </div>
        <div key={film.director} className="content-director">
            <p>Director: {film.director ? film.director : 'loading'}</p>
        </div>
        <div key={film.producer} className="content-producer">
            <p>Producer: {film.producer ? film.producer : 'loading'}</p>
        </div>
        <div key={film.release_date} className="release">
            <p>Release Date: {film.release_date ? film.release_date : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer" id="cover">Star Wars Movies</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )

}

export default Films;