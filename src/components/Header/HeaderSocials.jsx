import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaMedium} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/chidinma-nwonye-43725619a/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/Debchee?tab=repositories' target='_blank'><FaGithub/></a>
      <a href='https://twitter.com/Debchee1' target='_blank'><FaTwitterSquare/></a>
      <a href='https://medium.com/@debbinwonye456' target='_blank'><FaMedium/></a>

    </div>
  )
}

export default HeaderSocials