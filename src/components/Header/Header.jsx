import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/profilepic-new.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Chidinma Nwonye</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <HeaderSocials/>

          <div className="me">
            <img src={ME} className="me-first" alt='me'/>
          </div>

          <a href='#href' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    )
}

export default Header