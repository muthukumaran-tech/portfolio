import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from "../../assets/mk1.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muthu Kumaran</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header