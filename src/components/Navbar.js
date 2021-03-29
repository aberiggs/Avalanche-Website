import './css/Navbar.css';
import { Link } from "react-router-dom";

import logo from './logo.png'

function Navbar(){
    return(
        <div>
            <div className="Nav-main">
                <nav>
                    <ul>
                        <li className="Nav-top">
                            <Link to="/"><img src={logo} className="Nav-logo" draggable="false"></img></Link>
                        </li>
                        <li className="Nav-links">
                            <Link to="/FAQ">Frequently Asked Questions</Link>
                        </li>
                        <li className="Nav-links">
                            <Link to="/technical-documents">Technical Documents</Link>
                        </li>
                        <li className="Nav-links">
                            <Link to="/about">About the Site</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;