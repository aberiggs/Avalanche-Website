import './css/Navbar.css';
import { Link } from "react-router-dom";

import logo from './logo.png'

function Navbar(){
    return(
        <div>
            <div className="Nav-main">
                <nav>
                    <ul>
                        <li>
                            <Link to="/Avalanche-Website/"><img src={logo} className="Nav-logo" draggable="false"></img></Link>
                        </li>
                        <li className="Nav-links">
                            <Link to="/Avalanche-Website/technical-documents">Technical Documents</Link>
                        </li>
                        <li className="Nav-links">
                            <Link to="/Avalanche-Website/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;