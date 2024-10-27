import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Iterative Design Process</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessibility Standards</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability Testing</p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Performance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Maintainance</p>
            </li>
            
            
          </ul>
        </article>

        

        <article className="service">
          <div className="service__head">
            <h3>Technical Support</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>24/7 Support Availability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assist with identifying the root cause of problems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Remote Troubleshooting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and Quality Assurance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuous Maintenance & Support</p>
            </li>
            
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services