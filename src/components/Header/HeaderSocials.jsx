import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaMedium} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com' target='_blank'><FaGithub/></a>
      <a href='https://twitter.com' target='_blank'><FaTwitterSquare/></a>
      <a href='https://medium.com' target='_blank'><FaMedium/></a>

    </div>
  )
}

export default HeaderSocials