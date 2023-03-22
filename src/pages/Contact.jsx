import React from 'react';
import Form from '../components/Form';
import './style.css';

export default function Contact() {
  return (
    <div>
    <div className='row contactContainer g-0'>
      <div className='col contactColumn'>
      <h1 id='contactTxt'>Would you like to get in touch with me?</h1>
      <p id="contMsg">
        I would love to hear from you! Please fill out this form and I will reach out.
      </p>
      </div>
      < Form/>
      </div>
    </div>
  );
}