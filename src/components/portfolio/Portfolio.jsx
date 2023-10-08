import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/erp.png'
import IMG2 from '../../assets/bwg.png'
import IMG3 from '../../assets/me.png'
import IMG4 from '../../assets/rentbased.png'
import IMG5 from '../../assets/zingquotes.png'
import IMG6 from '../../assets/ongiljobs.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="erp"/>  
          </div>
          <h3>Kalyan Jewellers - ERP (UAE, Kuwait, Oman, Qatar)</h3>
          <div className='portfolio__item-cta'>
            <p>
            A centralized platform that integrates various business processes like sales, purchases, inventory, reports, and crm.
            </p>
            {/* <a href="" className='btn' target='-blank'>Github</a> */}
            {/* <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="bwg"/>  
          </div>
          <h3>Bookwedgo - Mandapam Booking Web Application</h3>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" className='btn' target='-blank'>Github</a> */}
            <a href="https://bookwedgo.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="me"/>  
          </div>
          <h3>Kalyan Jewellers Limited - Scheme Portal</h3>
          <div className='portfolio__item-cta'>
            <p> The portal offers secure payment gateways, allowing users to pay enroll fees, topup, and renewal or receive benefits directly into their accounts.</p>
            {/* <a href="https://github.com" className='btn' target='-blank'>Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="rentbased"/>  
          </div>
          <h3>RentBased - E-commerce Web Application</h3>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" className='btn' target='-blank'>Github</a> */}
            {/* <a href="https://ongiljobs.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
            <p>Experience the freedom of renting. Rent-Based E-commerce Platform empowers you to access a wide range of products for any occasion without the hassle of ownership</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="zingquotes"/>  
          </div>
          <h3>ZingQuotes - Picture Quotes </h3>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" className='btn' target='-blank'>Github</a> */}
            <a href="https://zingquotes.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            {/* <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="ongiljobs"/>  
          </div>
          <h3>OngilJobs - Job Searching Web Application</h3>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" className='btn' target='-blank'>Github</a> */}
            <a href="https://ongiljobs.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio