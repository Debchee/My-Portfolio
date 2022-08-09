import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6avppdj', 'template_up1nqwm', form.current, '3HyNVxjtJNTPuURCE')

    e.target.reset();
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact__container">
        <div class="contact__options">
          <article class="contact__option">
          <MdOutlineEmail className='contact-option__icon'/>
            <h4>Email</h4>
            <h5>debbinwonye456@gmail.com</h5>
            <a href='mailto:debbinwonye456@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article class="contact__option">
          <BsLinkedin className='contact-option__icon'/>
            <h4>LinkedIn</h4>
            <h5>Chidinma Nwonye</h5>
            <a href='https://www.linkedin.com/in/chidinma-nwonye-43725619a/' target='_blank'>Send a Message</a>
          </article>

          <article class="contact__option">
          <BsWhatsapp className='contact-option__icon'/>
            <h4>Whatsapp</h4>
            <h5>08065807829</h5>
            <a href='https://api.whatsapp.com/send?phone+2348065807829' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='name' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact