import React from 'react';
import './Testimonials.css';
import AVART1 from '../../assets/waawpic1.png';
import AVART2 from '../../assets/MrSunday pic.png';
import AVART3 from '../../assets/Miss Gracepic.png';
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
    name: 'WAAW Foundation',
    review: 'Exceptional attitude to learning, deligient and completes project on time. A listener and team worker.'
  },
  {
    avatar: AVART2,
    name: 'Sunday Ishiaku Software developer and Project manager WAAW Foundation',
    review: 'Excellent team worker, pays attention to details and turns in projects on time. Builds and delivers projects on time.'
  },
  {
    avatar: AVART3,
    name: 'Grace Itiung, Software developer WAAW Foundation',
    review: 'Completes projects and delivers outstandindly. Pays attention to details.'
  },
  {
    avatar: AVART4,
    name: 'Prosper Ubi, CEO and co-founder Lazerpay, CEO Ubique Media',
    review: 'Builds and delivers amazing website designs and functionality is top-notch. Exactly what the company needs to get the perfect user interface with our clients.'
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