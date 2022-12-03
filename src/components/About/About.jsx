import React from "react";
import "./About.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div class="container about__container">
        <div class="about__me">
          <div className="about__me-image">
            <img src={ME} className="me-me" alt="about-me" />
          </div>
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article class="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article class="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ articles </small>
            </article>
          </div>

          <p>
            Hi, my name is Chidinma Nwonye and I am a dynamic content writer who
            specializes in creating educational and engaging content for brands
            in the Lifestyle and Business industries. 
            
            <p>I am an innovative SEO
            Content writer with 3+ years of experience in B2B Marketing. I help
            companies create engaging SEO content and have successfully
            contributed to the 20% increase in traffic generated to clients’
            social media accounts and websites. </p>I am currently the Lead content
            writer and a social media manager at Greysoft Technologies and
            through written SEO articles and social media captions I have
            contributed to boosting their community engagement. <p>I perform
            splendidly at writing: . Blog Articles . Product descriptions .
            Product reviews .</p> <p>As a certified Hubspot Academy SEO
            content writer, I can help you write and manage your website
            content, ensuring that you can capture the attention of your desired
            audience through high-ranking articles and blog posts. You are on
            the lookout for creatively written website content that delights
            customers and effectively converts leads to long-term clients. </p>I'm
            here to help you transform those services into engaging words. Let
            me apply my skills and experiences gathered from over two years of
            writing similar articles for similar brands to create content that
            communicates your brand's vision and story. Connect with me and
            let's create the right content your brand deserves. Thank you.
            debbinwonye456@gmail.com
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
