import React from 'react'
import CV from '../../assets/MuthuKumaranP.pdf'
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