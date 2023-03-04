import React from 'react';
import './style.css';
import me from './me.png'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='row aboutCont g-0'>
        <div className='col col-md-3 col-sm-5'>
          <h1 id='aboutTxt'>About Me...</h1>
        </div>
        <div className='col-6 col-sm-10 introCol'>
          <p id="intro">
            Hi, I'm Mariah! I am a full-stack web developer that is enthusiastically committed to continuous growth and adaptation in the ever-evolving world of programming. I find joy in picking up new skills and I love being able to apply my background in the creative arts and foreign languages while learning and writing code. Please <Link to='/contact'>reach out</Link> if you'd like to connect! 
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
