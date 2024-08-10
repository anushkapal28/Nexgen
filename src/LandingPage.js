import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles.js';
import { dark } from './styles/Themes.js';
import "./App.css";
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';
import SlidingImage from './components/sections/SlidingImage.jsx';
import Loader from './components/Loader.jsx';
import Cardsec from './components/sections/Cardsec.jsx';
import Footer from './components/sections/Footer.jsx';
// import Header from './components/sections/Header.js';
import ScrollTriggerProxy from './components/ScrollTriggerProxy.jsx';
const LandingPage = () => {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        
          <AnimatePresence>
            {loaded ? null : <Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home/>
              <About/>
              <Cardsec/>
              <SlidingImage/>
              <Footer/>
              </main>
          </AnimatePresence>
      </ThemeProvider>
      

    </div>
  );
};

export default LandingPage;
