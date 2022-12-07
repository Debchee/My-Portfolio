import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/SEO Image2.jpg';
import IMG2 from '../../assets/data engineering.jpg';
import IMG3 from '../../assets/twitter-elon-musk.png';
import IMG4 from '../../assets/fake number.jpg';
import IMG5 from '../../assets/Friend partty.jpg';
import IMG6 from '../../assets/ecofriendly christmas.jpg';
import IMG7 from '../../assets/stitchsavypic.png';




const data = [
  {
    id:1,
    image:IMG1,
    title:'Why your business needs SEO marketing',
    // github:'https://github.com/Debchee/My-Site',
    demo:' https://www.linkedin.com/pulse/5-reasons-your-business-needs-seo-marketing-chidinma-nwonye'
  },

  {
    id:2,
    image:IMG2,
    title:'An overview of Data Engineering',
    // github:'https://github.com/Debchee/My-Social-Media-Site',
    demo:'https://medium.com/@debbinwonye456/what-is-data-engineering-overview-of-a-high-demand-analytics-role-abe449af53e8'
  },

  {
    id:3,
    image:IMG3,
    title:'Is it the layoff season? (A newsletter for Greysoft Technologies with over 40% open rate)',
    // github:'https://github.com/Debchee/StitchSavy',
    demo:'https://ckarchive.com/b/p9ueh9h357qrl'
  },

  {
    id:4,
    image:IMG4,
    title:'Heres why she gave you a fake number',
    // github:'https://github.com/Debchee/My-Git-Hub-Finder',
    demo:'https://www.markercontent.com/articles/lifestyle/heres-why-she-gave-you-a-fake-number-249284'
  },

  {
    id:5,
    image:IMG5,
    title:'How to Detty December on a Budget',
    // github:'https://github.com/Grace229/FarmVest',
    demo:'https://medium.com/@debbinwonye456/how-to-detty-december-on-a-budget-997c8bcf87fe'
  },

  {
    id:6,
    image:IMG6,
    title:'How to have an Eco-friendly Christmas',
    // github:'https://github.com/Debchee/TracCalorie',
    demo:'https://medium.com/@debbinwonye456/how-to-have-an-eco-friendly-and-green-christmas-22e83e011478/'
  },

  

  // {
  //   id:7,
  //   image:IMG6,
  //   title:'A Dating Website(Hitched)',
  //   github:'https://github.com/Debchee/Hitched-App',
  //   demo:'https://hitched-app.vercel.app/'
  // },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div class="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div class="portfolio__item-image">
            <img src={image} className="portpic1" alt={title}/>
          </div>

          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          {/* <a href={github} className='btn'>Github</a> */}
          <a href={demo} className='btn btn-primary' target='_blank'>Article Link</a>
          </div>
        </article>
            )
          })
        }

        

        
      </div>
    </section>
  )
}

export default Portfolio