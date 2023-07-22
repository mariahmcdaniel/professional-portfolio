import React from 'react';
import './style.css';
import me from './me.png'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='row aboutCont g-0'>
        <div className='col'>
          <h1 id='aboutTxt'>About Me...</h1>
        </div>
        <div className='col-6 col-sm-10 introCol'>
          <p id="intro">
            Hi! I'm Mariah. I am a full stack web developer currently working freelance- creating thoughtful, unique websites for artists and small businesses. I have an affinity for building React applications and am currently developing a kinship to Python but I also love coding in the basics- JavaScript, HTML and CSS. I am well versed in many other languages, libraries tools, frameworks. You can check these skills out in greater detail by visiting the <Link id="resumeLink" to='/resume'>resume tab</Link>.
            </p>
            <p id="intro2">
            Outside of programming, I am an artist of many mediums, primarily focused in resin work over the past few years. I started a business in 2020 where I sell my art in the form of jewelry, housewares and other objects made from resin and botanicals. I love to travel, I can speak french fluently and conversational spanish. I have spent time living abroad and I hope to do it again one day! I am also a passionate *amateur* astrologer, mostly as a tool for self growth and understanding. I love to discuss this topic, <i>specifically</i> with those genuinely interested.
            Both in and out of the tech space, I thrive in picking up new skills, learning new concepts and expanding on things I am already familiar with. Whether you are interested in hiring me for a project, have any tech-related questions for me, or just want to talk about things like astrology or art, please <Link id="contactLink" to='/contact'>reach out</Link>! 
          </p>
        </div>
        <div className='col'>
          <img
          id='myphoto'
          src={me}
          alt='mariah' />
        </div>
    </div>
  );
}
