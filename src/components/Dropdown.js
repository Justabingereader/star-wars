import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selecteditem, setSelectedItem] = useState(null)

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false)
  }


  return (
    <div className="dropdown-container">
      <button onClick={isOpen ? closeDropdown : openDropdown} className='toggle'>
        {isOpen ? <p className='symbol'>&#10005;</p> : <p className='symbol'>&#9776;</p>}
      </button>
      {isOpen && (
        <nav className='navigate'>
            <ul >
              <li >
                <Link to="/" onClick={() => handleSelect("Body")} className="body">Home</Link>
              </li>
              <li >
                <Link to="/Films" onClick={() => handleSelect("Films")} className="film">Films</Link>
              </li>
              <li >
                <Link to="/People" onClick={() => handleSelect("People")} className="people">People</Link>
              </li>
              <li >
                <Link to="/Planets" onClick={() => handleSelect("Planets")} className="planets">Planets</Link>
              </li>
              <li >
                <Link to="/Species" onClick={() => handleSelect("Species")} className="species">Species</Link>
              </li>
              <li >
                <Link to="/Starships" onClick={() => handleSelect("Starships")} className="starships">Starships</Link>
              </li>
              <li >
                <Link to="/Vehicles" onClick={() => handleSelect("Vehicles")} className="vehicles">Vehicles</Link>
              </li>
            </ul>
        </nav>
      )}
    </div>
  );
}

export default Dropdown;
