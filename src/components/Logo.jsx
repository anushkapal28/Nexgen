import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imga from "../assets/img/Logo.png";
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { useState } from 'react'
import { IconContext } from "react-icons";

const Container = styled.div`
`;

const TextWrapper = styled(motion.span)
`.bar-nav{
  position:absolute;
  z-index:8;
}
ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border-radius: 5vw;
  position: fixed;
  left: 1vw;
  top: 1vw;
  width: 98%;
}
.ico{
  margin-top:1.1vw;
  margin-left:89%;
  margin-right:1vw;
}

li a:hover{
  color: rgb(187, 161, 122);
}
li a {
  font-family: 'Albert Sans', sans-serif;
  display: block;
  color: #000000;
  font-size: 1.5vw;
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
}

li a:hover:after{
  transform: scaleX(1);
  transform-origin: bottom left;
}
.logo-av{
  margin-top:0.4vw;
  margin-left:1.2vw;
  height: 4.5vw;
  width: 4.5vw;
}`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  const [Menu,setMenu] = useState(false);
  return (
    <Container>
         
    </Container>
  );
};

export default Logo;