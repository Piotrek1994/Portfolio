import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import lottie from 'lottie-web'

const Header = () => {
	const container = useRef(null)

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			render: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../hello.json'),
		})
	}, [])

	return (
		<header>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Piotr Prus</h1>
				<h5 className='text-light'>I am future Frontend Developer</h5>
				<CTA />
				<HeaderSocial />

				<div className='animation'>
					<div className='container' ref={container}></div>
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
