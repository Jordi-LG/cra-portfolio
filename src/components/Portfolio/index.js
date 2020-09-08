// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import About from 'src/components/About';
import Header from 'src/containers/Header';
import Skills from 'src/components/Skills';
import Welcome from 'src/containers/Welcome';
import Works from 'src/containers/Works';

// == Composant
const Portfolio = () => (
  <div className="portfolio">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/skills" exact>
        <Skills />
      </Route>
      <Route path="/projects" exact>
        <Works />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

// == Export
export default Portfolio;
