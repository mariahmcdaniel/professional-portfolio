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
            I am a full-stack web developer with a unique perspective and a passion for logic and problem solving. I am enthusiastic in my commitment to perpetual growth and adaptation as the world of programming is constantly evolving. I find joy in picking up new skills and attribute my success with this endeavor to a background in forein languages and the creative arts. while learning and writing code. Please <Link id="contactLink" to='/contact'>reach out</Link> if you'd like to connect! 
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
