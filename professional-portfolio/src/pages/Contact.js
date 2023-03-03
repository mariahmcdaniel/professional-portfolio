import React from 'react';
import Form from '../components/Form';
import './style.css';

export default function Contact() {
  return (
    <div>
    <div className='row contactContainer'>
      <div className='col-8 contactColumn'>
      <h1 id='contactTxt'>Contact Me</h1>
      <p id="contMsg">
        I'd love to connect with you! Please fill out this form and I will be in touch.
      </p>
      </div>
      </div>
      < Form/>
    </div>
  );
}