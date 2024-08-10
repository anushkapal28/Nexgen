// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './LandingPage.js';
import Header from './components/sections/Header.js';
import Page from './components/Pages/Page.jsx'
import ContactUsPage from './components/Pages/ContactUsPage.jsx';
import Services from './components/Pages/OurServicesPage.jsx';
import DescriptionPage from './components/Pages/Page.jsx';
import Login from './components/Pages/Login.js';
import Signup from './components/Pages/SignUp.js';
import { AuthProvider } from './components/Pages/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="/details/:id">
              <DescriptionPage />
            </Route>
            <Route path="/contactus"><ContactUsPage /></Route>
            <Route path="/services"><Services /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
          </Switch>
          <ToastContainer /> {/* Ensure this is only included once in your app */}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
