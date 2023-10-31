import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import '../Vehicles.css';
function Vehicles(){
    const [vehicles, setVehicles] = useState([""]);

    const fetchVehicles = useCallback(async () => {
      const response = await axios.get('https://swapi.dev/api/vehicles/');
  
      setVehicles(response.data.results);
    }, [setVehicles]);
  
    useEffect(() => {
      fetchVehicles();
    }, [fetchVehicles]);

    const renderedImages = vehicles.map((vehicle) => {
        return (
        <div className="vehicles-container" key={Math.random()*78783784}>
        
        <div key={Math.random() * 999999} className="content-name">
            <p>Name: {vehicle.name ? vehicle.name : 'loading'}</p>
        </div>
        <div key={Math.random() * 888888} className="content-man">
            <p>Manufacturer: {vehicle.manufacturer ? vehicle.manufacturer : 'loading'}</p>
        </div>
        <div key={Math.random() * 77777} className="content-pass">
            <p>Passengers: {vehicle.passengers ? vehicle.passengers : 'loading'}</p>
        </div>
        <div key={Math.random() * 66666} className="content-cost">
            <p>Cost in Credits: {vehicle.cost_in_credits ? vehicle.cost_in_credits : 'loading'}</p>
        </div>
        <div key={Math.random() * 66666} className="content-model">
            <p>Model: {vehicle.model ? vehicle.model : 'loading'}</p>
        </div>
        <div key={Math.random() * 66666} className="content-crew">
            <p>Crew: {vehicle.crew ? vehicle.crew : 'loading'}</p>
        </div>
        </div>
        );
    })
    
      return (
          <div className="content-head" id="content-header">
            <h1 className="closer">Star Wars Vehicles</h1>
            <div className="content-body" id="content-container">
             {renderedImages}
             </div>
          </div>
      )
}

export default Vehicles;