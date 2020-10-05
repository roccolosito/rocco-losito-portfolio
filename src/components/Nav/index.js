import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" id="name" href="index.html">Rocco Losito</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="about.html">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="portfolio.html">Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="contact.html">Contact <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;