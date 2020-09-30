import React, { Fragment } from "react";
import "./style.css"
import headshot from "../../assets/images/graiffHeadshotSquare.jpg"
import pdf from "../../assets/files/Resume.pdf"

function Home() {
    return (
        <Fragment>
            <div class="container" id="main-container">
                <div class="row">
                    <div class="col-sm-12" id="home">
                        <a href="index.html"><img class="img img-thumbnail" src="./images/self.jpg" alt="Rocco's profile picture" /></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" id="home-intro">
                    <h6>Hi, I'm Rocco. Thanks for visiting my site.</h6>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;