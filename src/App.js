import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Films from "./components/Films";
import Planets from "./components/Planets";
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Body from './components/Body';
import People from './components/People';
import './App.css';
import Dropdown from "./components/Dropdown";

function App(){
    
    return (
    
    <BrowserRouter>
    <div>
        <nav>
            <ul>
            <div className="dropdown">
            <Dropdown/>
          </div>
          <li className="home">
            <Link to="/" style={{color: "rgb(255, 243, 69)"}}>Home</Link>
          </li>
          <li className="film">
            <Link to="/Films">Films</Link>
          </li>
          <li className="people">
            <Link to="/People">People</Link>
          </li>
          <li  className="planets">
            <Link to="/Planets">Planets</Link>
          </li>
          <li className="species">
            <Link to="/Species">Species</Link>
          </li>
          <li className="starships">
            <Link to="/Starships">Starships</Link>
          </li>
          <li className="vehicles">
            <Link to="/Vehicles">Vehicles</Link>
          </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/Films" element={<Films />}/>
            <Route path="/People" element={<People />} />
            <Route path="/Planets" element={<Planets />} />
            <Route path="/Species" element={<Species />} />
            <Route path="/Starships" element={<Starships />} />
            <Route path="/Vehicles" element={<Vehicles />} />
        </Routes>
        </div>
    </BrowserRouter>
    
    );
}

export default App;