import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


export default function HeaderSocials() {
    return (
      <div className='header__socials'>
        <a href='https://www.linkedin.com/in/omarashrafdev/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Omar-ashraf-dev' target='_blank'><FaGithub /></a>
        <a href='https://www.facebook.com/omar.ashraf.dev' target='_blank'><BsFacebook /></a>
      </div>
    )
}