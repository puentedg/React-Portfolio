import React, { useState }  from 'react';
import { validateEmail } from "../../utils/helpers";
import './contact.css';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'name') {
      if (!name) {
        setErrorMessage(`Please enter a valid name`);
      } else {
        setErrorMessage('');
      }
      setName(inputValue);
    } else if (inputType === 'email') {
      if (!validateEmail(email)) {
        setErrorMessage("Email not valid");
      } else {
        setErrorMessage('');
      }
      setEmail(inputValue);
    } else {
      if (!message) {
        setErrorMessage(`Message not valid`);
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is not valid');
      return;
    }
    if (!name) {
      setErrorMessage(`Enter a valid name`);
      return;
    }

    if (!message) {
      setErrorMessage(`Enter a valid message`);
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <section id='contact'>
       <h2>Contact</h2> 
     <div className="container">
        <div className='form__container'>
            <form className="form">
                <input
                className=""
                value={name}
                name="name"
                onChange={handleInputChange}
                onMouseOut={handleInputChange}
                type="text"
                placeholder="Name"
                />
                <input
                className=""
                value={email}
                name="email"
                onChange={handleInputChange}
                onMouseOut={handleInputChange}
                type="email"
                placeholder="Email"
                />
                <textarea
                className="message"
                value={message}
                name="message"
                onChange={handleInputChange}
                onMouseOut={handleInputChange}
                type="text"
                placeholder="Message"
                />
                <button className="btn btn__submit" type="button" onClick={handleFormSubmit}>
                Submit
                </button>
            </form>
      {errorMessage && (
        <div class="warning" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      </div>
    </section>
    
  );
}

export default Contact;