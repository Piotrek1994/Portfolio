import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'
import Game from '../../assets/game.mp4'
import Tube from '../../assets/tube.mp4'
import Ecommerce from '../../assets/ecommerce.mp4'
import HoverVideoPlayer from "react-hover-video-player";
import ecommerceImg from '../../assets/Ecommerce.jpg'
import mytubeImg from '../../assets/mytube.jpg'
import gameImg from '../../assets/game.jpg'



const data = [
	{
		id: 1,
		image: ME,
		title: 'Ecommerce Shop',
		github: 'https://github.com/Piotrek1994/Ecommerce-Dashboard',
		demo: 'https://ecommerce-dashboard-tau.vercel.app/',
		video: Ecommerce,
		videoImg: ecommerceImg,
	},
	{
		id: 2,
		image: ME,
		title: 'Space Game',
		github: 'https://github.com/Piotrek1994/my-game',
		demo: 'https://game-piotrek1994.vercel.app/',
		video: Game,
		videoImg: gameImg,
	},
	{
		id: 3,
		image: ME,
		title: 'My Tube',
		github: 'https://github.com/Piotrek1994/my-tube',
		demo: 'https://videos-piotrek1994.vercel.app/',
		video: Tube,
		videoImg: mytubeImg,
	},
]

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, title, github, demo, video, videoImg }) => {
					return (
						<article key={id} className='portfolio__item' >
							<div className='portfolio__item-image' onClick={()=> window.open(demo, "_blank")}>


              <HoverVideoPlayer
			  
      videoSrc={video}
      pausedOverlay={
        <img 
		
          src={videoImg}
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
