import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/haspl.jpg'
import AVTR2 from '../../assets/thulirsoft.jpg'
import AVTR3 from '../../assets/sample.jpg'

import {Pagination} from 'swiper';

import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className='container testimonials__container' modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable:true}}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
          </div>
            <h5 className='client__name'>Mr. Sunil Kumar</h5>
            <small className='client__review'>
            Many, many thanks for your fast and efficient delivery of work. We have been really, really impressed with the level of end to end service Web has provided to date. Our thanks and congratulations to your entire effort and work involved in rentbased e-commerce project. Will definitely recommend your capabilities and genuine delivery of work to others.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='avatar'/>
          </div>
            <h5 className='client__name'>Mr. Sowmya Narayanan</h5>
            <small className='client__review'>
            He appeared in my business as an ultimate solution. We were in a total loss as our previous designers have not completed my projects and stuck with it at a crucial stage. He would came with brilliant ideas in a tight deadline, did all the needful and made everything working at more than satisfactory level.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='avatar'/>
          </div>
            <h5 className='client__name'>Mr. Jeeva</h5>
            <small className='client__review'>
            Thank you for doing such a great job on our website. Having that personalized approach to helping our business grow with a new and more professional look was invaluable. You diligently worked with us and came up with a brilliant design that represents our company. We are really pleased with the result and it was a pleasure working with you.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials