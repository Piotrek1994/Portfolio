import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/piotr-prus-a11a98103/' target='_blank'><BsLinkedin/></a>
			<a href='https://github.com/Piotrek1994' target='_blank'><FaGithub/></a>
			<a href='https://www.facebook.com/profile.php?id=100015993577449' target='_blank'><FaFacebookF/></a>
		</div>
	)
}

export default HeaderSocials
