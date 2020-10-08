import React from 'react';
import './style.css';
import rhino from "../../assets/images/rhino.jpg";
import ghost from "../../assets/images/ghost.jpg";
import tv from "../../assets/images/tv.jpg";
import bunny from "../../assets/images/bunny.jpg";
import moped from "../../assets/images/moped.jpg";
import falcor from "../../assets/images/falcor.jpg";

function Drawings() {
    return (

        <main className="container-fluid" id="drawings-container">

            <section className="row">

                <div className="col-md-4 col-xs" id="text">
                    <hr />
                    <h1>Select Drawings</h1>
                </div>

                <div className="col-md-4 col-xs apps" id="drawings">
                    <img className="image"
                        src={rhino} alt="rhino drawing" />
                    <h6>Rhino</h6>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <img className="image"
                                src={moped} alt="moped drawing" />
                            <h6>Moped</h6>
                        </div>
                    </div>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <img className="image"
                                src={tv} alt="TV drawing" />
                            <h6>Television</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs apps" id="drawings2">
                    <img className="image" src={ghost}
                        alt="ghost drawing" />
                    <h6>A Ghost Story</h6>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <img className="image"
                                src={bunny} alt="A Christmas Story drawing" />
                            <h6>A Christmas Story</h6>
                        </div>
                    </div>
                    <div className="row bottom-app">
                        <div className="col col-xs">
                            <img className="image"
                                src={falcor} alt="Falcor drawing" />
                            <h6>Falcor</h6>
                        </div>
                    </div>
                </div>

            </section>

        </main>

    )
}

export default Drawings;