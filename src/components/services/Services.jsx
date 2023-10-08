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
              <p>Include holistic analysis of the target audience, overview of  the competitive environment and usability testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can explore both the current state of your product and future business opportunities.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will define and present the core usability issues, which, if tackled, can improve your product’s business performance.</p>
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
              <p>Assist with identifying the root cause of problems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manages and resolves issues in a constantly changing environment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understand the customer's grasp of technology.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and Quality Assurance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuous Maintenance and Support</p>
            </li>
            
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services