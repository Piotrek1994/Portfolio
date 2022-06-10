import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwbcyx9', 'template_2ljj72m', form.current, '07AZLH0eV-nDl66PX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pprus94@gmail.com</h5>
            <a href="mailto:pprus94@gmail.com" target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Piotr Prus</h5>
            <a href="https://www.facebook.com/profile.php?id=100015993577449" target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+ 48 790 248 450</h5>
            <a href="https://api.whatsapp.com/send?phone=790248450" target="_blank"  rel="noreferrer">Send a message</a>
          </article>

        </div>

				<form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Yor Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
			</div>
		</section>
	)
}

export default Contact
