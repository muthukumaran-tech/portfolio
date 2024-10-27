import React,{useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaDiscord, FaTelegram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Telegram from '../../assets/telegram.jpg'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_hwhkq6j', 'template_7h1hwua',form.current,'iNiU7mNu4Jx58Fm8o')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>muthu.dev.pro@gmail.com</h5>
            <a href='mailto:muthu.dev.pro@gmail.com'>Send a message</a>
            
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7010794956</h5>
            <a href='https://api.whatsapp.com/send?phone=7010794956'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>muthukumaran_developer</h5>
            <a href='https://discord.com/invite/gXpn2N4M'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your full name" required/>
          <input type="email" name="email" placeholder="your Email" required/>
          <textarea name="message" rows="7" placeholder="your Message" required/>
          <button type='submit' className='btn btn-primary' style={{padding:"10px", width:"100%"}}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact