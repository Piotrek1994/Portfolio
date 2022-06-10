import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What skills I have?</h5>
			<h2>My experience</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Technikal Skills</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Regular </small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Regular</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>JavaScript</h4>
								<small className='text-light'>Regular</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>React</h4>
								<small className='text-light'>Regular</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>GIT</h4>
								<small className='text-light'>Regular</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>API</h4>
								<small className='text-light'>Regular</small>
							</div>
						</article>
					</div>
				</div>

				<div className='experience__website'>
					<h3>Basic Knowledge</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>Tailwind</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>Sass</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>BEM</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>Gulp</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>Bootstrap</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className="experience__details-icon " />
							<div>
								<h4>RWD</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
