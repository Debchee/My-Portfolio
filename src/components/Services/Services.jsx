import React from 'react';
import './Services.css';
import {FiCheck} from 'react-icons/fi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div class="container services__container">
        <article className="service">
          <div className="service__head">
              <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Web Design and Development.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Hosting of website on external servers.</p>
            </li>
            {/* <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li> */}
          </ul>
        </article>
           {/* End of Web Dev */}

           <article className="service">
          <div className="service__head">
              <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Creation of engaging website articles</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Writing Blog / Website Content with high convertion rates.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Writing of Product Reviews for different products.</p>
            </li>
            {/* <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li> */}
          </ul>
        </article>
           {/* End of Content Creation */}

      </div>
    </section>
  )
}

export default Services