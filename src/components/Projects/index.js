import React from 'react';
import './style.css';
import meditation from "../../assets/images/shotglass.png";
import burger from "../../assets/images/burger.png";
import weather from "../../assets/images/weather.png";
import stella from "../../assets/images/stella.png";
import note from "../../assets/images/note.png";
import nyt from "../../assets/images/nyt.png";

function Projects() {
    return (

        <main className="container-fluid" id="portfolio-container">

            <section className="row">

                <div className="col-md-4 col-xs" id="text">
                    <hr />
                    <h1>Select App Projects</h1>
                </div>

                <div className="col-md-4 col-xs apps" id="projects">
                    <a href="https://roccolosito.github.io/meditationApp/" target="_blank" rel="noopener noreferrer"><img className="app-graphic"
                        src={meditation} alt="meditation app interface" /></a>
                    <h5><a href="https://github.com/roccolosito/meditationApp" target="_blank" rel="noopener noreferrer">ShotGlass Meditation</a></h5>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <a href="https://chomptheburger.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="app-graphic"
                                src={burger} alt="burger app start page" /></a>
                            <h5><a href="https://github.com/roccolosito/burger" target="_blank" rel="noopener noreferrer">Chomp The Burger!</a></h5>
                        </div>
                    </div>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <a href="https://roccolosito.github.io/weatherDashboard/" target="_blank" rel="noopener noreferrer"><img className="app-graphic"
                                src={weather} alt="current weather search screen" /></a>
                            <h5><a href="https://github.com/roccolosito/weatherDashboard" target="_blank" rel="noopener noreferrer">Weather Dashboard</a></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs apps" id="projects2">
                    <a href="https://stellavybezz.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="app-graphic" src={stella}
                        alt="stella app start page" /></a>
                    <h5><a href="https://github.com/roccolosito/stella" target="_blank" rel="noopener noreferrer">Stella Music</a></h5>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <a href="https://quick-note-taker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="app-graphic"
                                src={note} alt="note taker app start page" /></a>
                            <h5><a href="https://github.com/roccolosito/note-taker" target="_blank" rel="noopener noreferrer">Note Taker</a></h5>
                        </div>
                    </div>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <a href="https://roccolosito.github.io/NYT-Article-Search/" target="_blank" rel="noopener noreferrer"><img className="app-graphic"
                                src={nyt} alt="new york times article search page" /></a>
                            <h5><a href="https://github.com/roccolosito/NYT-Article-Search" target="_blank" rel="noopener noreferrer">NYT Article Search</a></h5>
                        </div>
                    </div>
                </div>

            </section>

        </main>

    )
}

export default Projects;