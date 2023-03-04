import React, { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

function Form() {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();

   
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      
      return;
     
    }
    if (!name) {
      setErrorMessage('Your name is required.');
      
      return;
     
    }
    if (!message) {
      setErrorMessage(
        `A message is required for your inquiry`
      );
      return;
    }
    alert(`Hello ${name}`);

    
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="contactCont">
      <form className="form">
        <div className="form-group">
        <label for="email">Email:</label>
        <input
          value={email}
          name="email"
          id="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className="form-group">
        <label for="name">Name:</label>
        <input
          value={name}
          name="name"
          id="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div className="form-group">
        <label for="message">Mesage:</label>
        <textarea
          value={message}
          id="message"
          name="message"
          rows="2" 
          cols="30"
          onChange={handleInputChange}
          type="message"
          placeholder="Type your message here"
        />
        </div>
        <button type="button" id="submitBtn" onClick={handleFormSubmit}>Submit</button>
      </form>
      <p id="thanks">Thanks {name}!</p>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
