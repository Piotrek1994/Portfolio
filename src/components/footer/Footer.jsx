import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
	return (
		<footer>
			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__info'>
				<div className='footer__copyright'>
					<p>&copy; 2022 Piotr Prus | All rights reserved.</p>
				</div>
				<div className='footer__socials'>
					<a href='https://www.facebook.com/profile.php?id=100015993577449' target='_blank' rel="noreferrer">
						<FaFacebookF />
					</a>
					<a href='https://www.instagram.com/im_piotr/' target='_blank' rel="noreferrer">
						<FiInstagram />
					</a>
					<a href='https://twitter.com/Piotr18200273' target='_blank' rel="noreferrer">
						<IoLogoTwitter />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
