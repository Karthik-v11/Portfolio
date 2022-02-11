import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Home from "./Home/home";
import About from "./About/about";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Footer from "./Footer/footer";
import ScrollToTop from "./scrollToTop";

const RouterSetup = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterSetup;
