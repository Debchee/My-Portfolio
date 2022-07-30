import React from 'react';
import './About.css';
import ME from '../../assets/about-me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div class="container about__container">
        <div class="about__me">
            <div className="about__me-image">
              <img src={ME} className='me-me' alt='about-me'/>
            </div>
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article class="about__card">
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article class="about__card">
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ </small>
            </article>
          </div>

          <p>
            Knowledgeable Front-end developer adept in building responsive and user-friendly websites. Proficient in software languages such as HTML5, CSS3, JavaScript, Reactjs, Nodejs and other CSS Frameworks like Tailwind, BootStrap, and MaterialUI. Adequately perform  independent and team based projects for the purpose of executing ideas and improving designs for functionality and usability.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About