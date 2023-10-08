import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/mk1.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt= "About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>25+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>18+ Completed</small>
            </article>
          </div>
          <p>
          My journey into the world of web development began with an insatiable curiosity for technology and a desire to create meaningful digital experiences. Over the years, I've honed my skills in both front-end and back-end development, allowing me to take projects from concept to completion with ease.
          </p>
          <p>
          What sets me apart is my ability to seamlessly integrate front-end and back-end technologies, creating holistic solutions that not only look great but also function flawlessly. Whether it's building e-commerce platforms, content management systems, or custom web applications, I thrive in the full-stack realm.
          </p>
          <p>
          In the ever-evolving field of web development, I understand the importance of staying up-to-date with the latest trends and technologies. I'm committed to continuous learning and improvement, which allows me to offer cutting-edge solutions to my clients.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About