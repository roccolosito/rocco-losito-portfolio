import React, { Fragment } from 'react';
import './style.css';

function Projects() {
  return (
        < >

      <main class="container-fluid" id="portfolio-container">

        <section class="row">

          <div class="col-md-4 col-xs" id="text">
            <hr>
              <h1>Selected App Projects</h1>
   </div>

            <div class="col-md-4 col-xs apps" id="projects">
              <a href="https://roccolosito.github.io/meditationApp/" target="_blank"><img class="app-graphic"
                src="./images/shotglass.png" alt="meditation app interface"></a>
                <h5><a href="https://github.com/roccolosito/meditationApp" target="_blank">ShotGlass Meditation</a></h5>
                <div class="row bottom-app">
                  <div class="col col-xs">
                    <a href="https://chomptheburger.herokuapp.com/" target="_blank"><img class="app-graphic"
                      src="./images/burger.png" alt="burger app start page"></a>
                      <h5><a href="https://github.com/roccolosito/burger" target="_blank">Chomp The Burger!</a></h5>
       </div>
                  </div>
                  <div class="row bottom-app">
                    <div class="col col-xs">
                      <a href="https://roccolosito.github.io/weatherDashboard/" target="_blank"><img class="app-graphic"
                        src="./images/weather.png" alt="current weather search screen"></a>
                        <h5><a href="https://github.com/roccolosito/weatherDashboard" target="_blank">Weather Dashboard</a></h5>
       </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-xs apps" id="projects2">
                    <a href="https://stellavybezz.herokuapp.com/" target="_blank"><img class="app-graphic" src="./images/stella.png"
                      alt="stella app start page"></a>
                      <h5><a href="https://github.com/roccolosito/stella" target="_blank">Stella Music</a></h5>
                      <div class="row bottom-app">
                        <div class="col col-xs">
                          <a href="https://quick-note-taker.herokuapp.com/" target="_blank"><img class="app-graphic"
                            src="./images/note.png" alt="note taker app start page"></a>
                            <h5><a href="https://github.com/roccolosito/note-taker" target="_blank">Note Taker</a></h5>
       </div>
                        </div>
                        <div class="row bottom-app">
                          <div class="col col-xs">
                            <a href="https://roccolosito.github.io/NYT-Article-Search/" target="_blank"><img class="app-graphic"
                              src="./images/nyt.png" alt="new york times article search page"></a>
                              <h5><a href="https://github.com/roccolosito/NYT-Article-Search" target="_blank">NYT Article Search</a></h5>
       </div>
                          </div>
                        </div>

 </section>

</main>
</ >
);

};
