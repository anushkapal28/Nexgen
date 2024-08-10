import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { AiOutlineRight } from "react-icons/ai";
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <ul class="links">
            <li><a href="https://www.google.com/maps/search/B28+Sewak+Park+Dwarka+Mor+New+Delhi+110059/@28.6173916,77.0342058,16.98z?entry=ttu"><FaLocationDot className='icon'/> B28 Sewak Park Dwarka Mor New Delhi 110059</a></li>
            <li><a href="tel:9560321883"><IoCall className='icon'/> +919560321883</a></li>
            <li><a href="mailto:sales@nexgendigitalsolution.com"><IoMdMail className='icon'/>sales@nexgendigitalsolution.com</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4><FaLink /> Popular Links</h4>
          <ul class="links">
            <li><Link to="/"><AiOutlineRight className='icon'/>Home</Link></li>
            <li><Link to="/contactus"><AiOutlineRight className='icon'/>Contact Us</Link></li>
            <li><Link to="/services"><AiOutlineRight className='icon'/>Our Services</Link></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>NEXGEN</h4>
          <p>
          One Stop Digital Solutions
          </p>
          
          <div class="icons">
            <i class="icon"><FaFacebook /></i>
            <i class="icon"><FaTwitter /></i>
            <i class="icon"><FaLinkedin /></i>
          </div>
        </div>
      </div>
    </section>
  );
}