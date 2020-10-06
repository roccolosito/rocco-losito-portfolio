import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div id="mainContainer">
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            {/* <Link to="/contact"></Link> */}
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
