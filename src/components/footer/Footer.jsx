import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Footer() {
    return (
      <footer>
        <a href='#' className='footer__logo'>Omar Ashraf</a>

        <ul className="permalinks">
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#expereince'>Expereince</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a target='_blank' href='https://www.facebook.com/omar.ashraf.dev'><BsFacebook /></a>
          <a target='_blank' href='https://www.instagram.com/omarashrafdev/'><BsInstagram /></a>
          <a target='_blank' href='https://twitter.com/omarashrafdev'><BsTwitter /></a>
          <a target='_blank' href='https://www.linkedin.com/in/omarashrafdev/'><BsLinkedin /></a>
          <a target='_blank' href='https://github.com/Omar-ashraf-dev'><BsGithub /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Omar Ashraf. All right reserved.</small>
        </div>
      </footer>
    )
}