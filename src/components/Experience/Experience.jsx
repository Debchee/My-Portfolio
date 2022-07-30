import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div class="container experience__container">
        <div class="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div class="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>TailWind</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

        {/* ======END OF FRONTEND ===== */}
        <div class="experience__backend">
        <h3>BackEnd Development</h3>
          <div class="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience