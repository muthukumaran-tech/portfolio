import React from 'react'
import CV from '../../assets/Muthu_Kumaran_P-Senior_Software_Engineer.pdf'
import './Header.css'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Dowload CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    )
}

export default CTA