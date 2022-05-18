import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className='containet services__container'>
				<artice className='service'>
					<div className='service__head'>
						<h3>UI/UX Design</h3>
					</div>

          <ul className='service__list'>
            <li>
              <BiCheck className=''/>
            </li>
          </ul>
				</artice>
			</div>
		</section>
	)
}

export default Services
