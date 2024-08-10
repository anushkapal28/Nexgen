import "./About.css";
import img1 from "./1.png";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const About = () => {
    const { scroll } = useLocomotiveScroll();
  return <div><div 
  className="four">
    <div className="imgab">
    <img src={img1} className="imga"/> 
    </div>
    <div className="contab">
      <h3 className="h-3">WELCOME TO NEXGEN DIGITAL SOLUTIONS.</h3>
      <h1 className="h-1">One Stop Digital Solutions</h1>
    <p className="des">
    We have experienced professional team of developers are there to fulfill your requirements of web design, web development and digital marketing. We provide services like Website Designing, Web Development, Web Redesigning, Mobile App Development, and Digital Marketing including SEO Services, SMO Services, PPC Services, Bulk Email Services, Bulk SMS Services, WhatsApp Marketing Services and various web services all over the world. Websites and Mobile App are turning into a daily need for increasing business in India. Various entrepreneurs and business man are showing interest in India.
    </p>
    <div className="listser">
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Bulk SMS Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Bulk Email Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Bulk Whatsapp Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">IVR Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Voice Broadcasting Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Digital Marketing Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">SEO Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Website Development Services</div></div>
      <div className="listc"><AiOutlineCheckCircle className="tick" /><div className="listd">Mobile App Development Services</div></div>
    </div>
    
    </div>
    
  </div>
  
  </div>;
};

export default About;
