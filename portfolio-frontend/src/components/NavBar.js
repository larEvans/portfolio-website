// src/components/Navbar.js

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Navbar() {
    return (
        <nav id='navbbar'className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to="/">Portfolio</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
