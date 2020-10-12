import React from 'react';
import './style.css';
import self from "../../assets/images/self.jpg";
import resume from "../../assets/files/resume.pdf"

function About() {
    return (
        <main className="main" id="main-container">

            <div className="row">
                <div className="col-lg"></div>
            </div>

            <div className="row">
                <div className="col-md-4 col-s">
                    <img className="img img-thumbnail" src={self} alt="Rocco's profile" />
                </div>
                <div className="col-md-8 col-s about" id="about">
                    <hr />
                    <p>Rocco is based out of Greenpoint, Brooklyn and currently studying full stack web development at</p>
                    <p>Columbia University. Rocco is also a real estate broker spearheading sales and leasing for a boutique
                    firm
                    in</p>
                    <p>Greenpoint (Coda Real Estate), where he's worked for 8 years. Prior to that he was in the music
                    business</p>
                    <p>for nearly a decade as the Global Administration/Copyright Manager for Sony/ATV and EMI Music</p>
                    <p>Publishing. He graduated from New York University with a bachelor of music degree in 2007, and</p>
                    <p>when he's not immersed in coding work, he's drawing (mostly with ballpoint pen), writing music,</p>
                    <p>or making various pastas from scratch!</p>
                    <br />
                    <br />
                    <p>To work with Rocco, please email <span className="email">roccolosito -at- gmail.com</span> or text 347.237.7007.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr />
                    <p>Check Rocco out on <a href="https://www.linkedin.com/in/roccolosito/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or
                    <a href="https://github.com/roccolosito" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                    And, here is his <a href={resume} target="_blank" rel="noopener noreferrer">resumé</a>.</p>
                </div>

            </div>

        </main>
    )
}

export default About;