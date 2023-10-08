import React from 'react'
import './Footer.css'
import {AiFillYoutube} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>mk17phoenix - Full Stack Web Developer</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/mk17phoenix"><IoLogoTwitter/></a>
        <a href="https://instagram.com/mk17phoenix"><FiInstagram/></a>
        <a href="https://www.youtube.com/channel/UCtK5vxHZoANz7LJycuqU9UA"><AiFillYoutube/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; mk17phoenix. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer