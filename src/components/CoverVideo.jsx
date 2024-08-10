import styled from 'styled-components';
import Video from '../assets/Video.mp4';
import Videop from '../assets/videop.mp4';
import { motion } from 'framer-motion';
import "./cover.css";
import React, { useState, useEffect } from 'react';   
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  
  video {
    width: 100%;
    height: 102vh;
    object-fit: cover;
    
  }
`;

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 8;
  background-color: ${(props) =>
    `rgba(${props.theme.bodyRgba}, 0.2)`};
`;

const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 47%;
  left: 24%;
  z-index: 8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
  }
  
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  const [largeScreen, setLargeScreen] = useState(false);
    
  useEffect(() => {
    function handleResize() {
       if (window.innerWidth>700) {
          setLargeScreen(true);
       }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <SectionWrapper className='abcc'>
      <OverLay />
      <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".12"
            data-scroll-speed="2"
          >
            <p className="cover-head-vid">Nexgen</p>
          </motion.h1>
        </div>
       
      </TitleWrapper>
      <video src={Video} type="video/mp4" className='video' autoPlay muted loop />
      <video src={Videop} type="video/mp4" className='videop' autoPlay muted loop />
    </SectionWrapper>
  );
};

export default CoverVideo;