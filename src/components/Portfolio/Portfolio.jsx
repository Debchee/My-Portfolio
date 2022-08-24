import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/blogpic.png';
import IMG2 from '../../assets/socialmedia-app.png';
import IMG3 from '../../assets/githubpic.png';
import IMG4 from '../../assets/Farmvestpic.png';
import IMG5 from '../../assets/Traccalpic.png';
import IMG6 from '../../assets/Hitchedpic.png';
import IMG7 from '../../assets/stitchsavypic.png';




const data = [
  {
    id:1,
    image:IMG1,
    title:'My blog site',
    github:'https://github.com/Debchee/My-Site',
    demo:' https://chiblogsite.herokuapp.com/'
  },

  {
    id:2,
    image:IMG2,
    title:'A Social Media website',
    github:'https://github.com/Debchee/My-Social-Media-Site',
    demo:'My-socialmedia-app.surge.sh'
  },

  {
    id:3,
    image:IMG7,
    title:'A Fahion landing page',
    github:'https://github.com/Debchee/StitchSavy',
    demo:'https://stitch-savy.vercel.app/'
  },

  {
    id:4,
    image:IMG3,
    title:'A Git-hub Finder App',
    github:'https://github.com/Debchee/My-Git-Hub-Finder',
    demo:'http://chi-git-finder.surge.sh/'
  },

  {
    id:5,
    image:IMG4,
    title:'An Agro Landing page',
    github:'https://github.com/Grace229/FarmVest',
    demo:'http://interesting-blade.surge.sh/'
  },

  {
    id:6,
    image:IMG5,
    title:'A Calorie Tracker App',
    github:'https://github.com/Debchee/TracCalorie',
    demo:'http://trac-calorie.surge.sh/'
  },

  

  {
    id:7,
    image:IMG6,
    title:'A Dating Website(Hitched)',
    github:'https://github.com/Debchee/Hitched-App',
    demo:'https://hitched-app.vercel.app/'
  },
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
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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