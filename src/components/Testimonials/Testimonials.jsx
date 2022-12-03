import React from 'react';
import './Testimonials.css';
import AVART1 from '../../assets/Bilal.png';
import AVART2 from '../../assets/notemast.png';
import AVART3 from '../../assets/Mariya.png';
import AVART4 from '../../assets/Prosperpic.png';

// import Swiper core and required modules 
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVART1,
    name: 'Bilal Salau - Creative Director at Greysoft Technologies',
    review: 'Exceptional content writer with an indepth knowledge on SEO. A listener and team worker.'
  },
  {
    avatar: AVART2,
    name: 'Nonso Nwagbo - Lead Content Writer, Notemast Media',
    review: 'Excellent team worker, pays attention to details and turns in projects on time.'
  },
  {
    avatar: AVART3,
    name: 'Mariya, - Community Manager at Greysoft Technologies',
    review: 'Chidinma delivers SEO articles in a way thats both engaging and relatable. Well done!'
  },
  {
    avatar: AVART4,
    name: 'Prosper Ubi, COO and co-founder Lazerpay, CEO Ubique Media, CEO IGrow Africa',
    review: 'Writes SEO articles that attracts the right audience to take desired actions. No better writer!'
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img className="client__avatar1" src={avatar} alt='...' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }



      </Swiper>
    </section>
  )
}

export default Testimonials