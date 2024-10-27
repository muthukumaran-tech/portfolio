import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerrank} from 'react-icons/si'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/muthukumaran-developer/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/muthukumaran-tech/" target="__blank"><FaGithub/></a>
        <a href="http://www.hackerrank.com/mk17phoenix/" target="__blank"><SiHackerrank/></a>
    </div>
  )
}

export default HeaderSocials