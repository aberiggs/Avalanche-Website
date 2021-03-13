import './css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Avalanche-Website/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Avalanche-Website/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;