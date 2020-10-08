import React from "react";
import "./style.css";
import self from "../../assets/images/self.jpg"

function Home() {
    return (
        < > 
            <div className="container" id="main-container">
                <div className="row">
                    <div className="col-sm-12" id="home">
                        <a href="/"><img className="profile" src={self} alt="Rocco's profile" /></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12" id="home-intro">
                    <h6>Hi, I'm Rocco, a full-stack web developer and illustrator.</h6>
                    <h6>Thank you for visiting my site.</h6>
                </div>
            </div>
        </ >
    );
};

export default Home;