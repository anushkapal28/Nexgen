import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './LandingPage.js';
import Page from './components/Pages/Page.jsx'

const routes = () => (
  <Switch>
    <Route exact path="/"><LandingPage/></Route>
        <Route path="/contactus"><Page/></Route>
        <Route path="/services"><Page/></Route>
  </Switch>
);

export default routes;