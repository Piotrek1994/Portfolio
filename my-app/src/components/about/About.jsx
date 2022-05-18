import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFolderCheck } from 'react-icons/bs'

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-imgage'>
						<img src={ME} alt='About Image' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>1+ Year Working</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>1+ Year Working</small>
						</article>

						<article className='about__card'>
							<BsFolderCheck className='about__icon' />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos rem eius exercitationem eveniet molestias
						minima laboriosam tempora deleniti molestiae expedita natus commodi ipsa enim provident, iste excepturi.
						Rem, deleniti officiis!
					</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	)
}

export default About
