import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // message === ""
    //   setError(true)
    //  setTimeout(() => {
    //       setError(false);
    //     }, 5000);
    if (message === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <>
      <section className="container mx-auto p-6 py-8 md:max-w-2xl">
        <div className=" mx-auto container flex flex-col space-y-2 pt-8">
          <h2 className="text-extrabold text-3xl">Contact Me</h2>
          <p className="max-w-sm md:max-w-full text-lightGrey">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form className="contact" onSubmit={handleSubmit}>
          <div className="contact-info">
            <div>
              <label>First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
              className={err ? "message active" : "message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <p className={err ? "err-msg active" : "err-msg"}>
              Please enter a message
            </p>
          </div>

          <label className="container">
            You agree to providing your data to name who may contact you.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <button id="btn__submit">Send message</button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
