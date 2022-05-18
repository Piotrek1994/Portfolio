import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>pprus94@gmail.com</h5>
            <a href="mailto:pprus94@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Messenger</h4>
            <h5>Piotr Prus</h5>
            <a href="https://m.me/profile.php?id=100015993577449">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>pprus94@gmail.com</h5>
            <a href="mailto:pprus94@gmail.com">Send a message</a>
          </article>

        </div>

				<form action=''></form>
			</div>
		</section>
	)
}

export default Contact
