import React from 'react'
import CV from '../../assets/CV.png'

const CTA = () => {
  return (
    <div className="cta">
        <a className='btn' href={CV} download='Piotr Prus.png'>Download CV</a>
        <a className='btn btn-primary' href="#contact">Contact</a>
    </div>
  )
}

export default CTA