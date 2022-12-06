import React, { useState, useRef }  from 'react';
import { validateEmail } from "../../utils/helpers";
import './contact.css';
// import emailjs from '../../emailkey'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
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
    
      emailjs.sendForm('service_1u6nn8a', 'template_5bvnuyk', form.current, 'SeHiWw4CKaw8ovsNK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
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

    // emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    // .then((result) => {
    // alert("Message Sent, We will get back to you shortly", result.text);
    // },
    // (error) => {
    // alert("An error occurred, Please try again", error.text);
    // });

  };

  return (
    <section id='contact'>
       <h2>Contact</h2> 
     <div className="container">
        <div className='form__container'>
            <form className="form" ref={form} onSubmit={handleFormSubmit}>
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
                <button className="btn btn__submit" type="submit" value="Send">
                Submit
                </button>
            </form>
      {errorMessage && (
        <div className="warning" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      </div>
    </section>
    
  );
}

export default Contact;