import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'
import ZRZUT from '../../assets/zrzut.mp4'
import HoverVideoPlayer from "react-hover-video-player";



const data = [
	{
		id: 1,
		image: ME,
		title: 'Title',
		github: 'https://github.com/Piotrek1994/Ecommerce-Dashboard',
		demo: 'https://ecommerce-dashboard-tau.vercel.app/',
	},
	{
		id: 2,
		image: ME,
		title: 'Title',
		github: 'https://github.com/Piotrek1994/my-tube',
		demo: 'https://videos-rouge-one.vercel.app/',
	},
	{
		id: 3,
		image: ME,
		title: 'Title',
		github: 'https://github.com/Piotrek1994/colourful-board',
		demo: 'https://colourful-board.vercel.app/',
	},
]

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, title, github, demo }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>

              <HoverVideoPlayer
      videoSrc={ZRZUT}
      pausedOverlay={
        <img
          src=""
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />


							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a href={github} className='btn' target='_blank'>
									Github
								</a>
								<a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Portfolio
