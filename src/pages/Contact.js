import React, { useState } from 'react';
import { validateEmail } from '../utils'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setMessageSent('Message Sent')
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage(null)

    setTimeout(() => {
      setMessageSent(null)
    }, 5000);
  };

  return (
    <div class="grid place-items-center">
      <div className="bg-orange-100 w-4/5 mt-10 pt-3 pb-3 border-2 border-neutral-400">
        <h2 className="text-2xl font-medium text-teal-600 text-center ">Contact Me</h2>
        <form id="contactMe" className="w-4/5 mx-auto grid gap-2 mt-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="  Name"
            value={name}
            onChange={handleInputChange}>
          </input>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="  Email"
            value={email}
            onChange={handleInputChange}>
          </input>
          <textarea
            rows="4"
            cols="30"
            id="message"
            name="message"
            placeholder="  Your message here"
            value={message}
            onChange={handleInputChange}>
          </textarea>
          {errorMessage && (
            <div>
              <p className="text-orange-700 ">{errorMessage}</p>
            </div>
          )}
          {messageSent && (
            <div>
              <p className="text-teal-600">{messageSent}</p>
            </div>
          )}
          <button type="submit"
            className="border-2 border-slate-300 w-1/2 mx-auto border-double shadow-md bg-teal-50"
            onClick={handleFormSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}