import React from 'react';
import Form from '../components/Form';
import './style.css';

export default function Contact() {
  return (
    <div>
    <div className='row contactContainer g-0'>
      <div className='col contactColumn'>
      <h1 id='contactTxt'>Would you like to get in touch with me?</h1>
      <p className="contMsg">
        You can email me at <button onClick={() => window.location.href = 'mailto:mariahmcdaniel@icloud.com'} id="emailBtn">mariahmcdaniel@icloud.com</button>
      </p>
      <p className="contOr">
        - or - 
      </p>
      <p className="contMsg">
        Simply fill out this form and I will reach out to you!
      </p>
      </div>
      < Form/>
      </div>
    </div>
  );
}