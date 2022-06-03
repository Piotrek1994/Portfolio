import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

 const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100015993577449" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/im_piotr/" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/Piotr18200273" target='_blank'><IoLogoTwitter/></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; 2022 Piotr Prus. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer