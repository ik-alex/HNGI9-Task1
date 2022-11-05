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
      <section className=" mx-auto p-6 py-8 md:max-w-2xl">
        <div className=" mx-auto  flex flex-col space-y-2 pt-8">
          <h2 className="text-extrabold text-3xl">Contact Me</h2>
          <p className="max-w-sm md:max-w-full text-lightGrey">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          id=""
          className=" flex flex-col w-full py-10 space-y-4  rounded-lg "
        >
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="name" className="pb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="colored_input"
                placeholder="Enter your first name"
              />
            </div>
            <div className=" flex flex-col space-y-2 w-full">
              <label htmlFor="name" className="pb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="colored_input"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="colored_input "
              placeholder="yourname@email.com"
            />
            {/* flex-1 w-full p-1 pl-2 border-2 rounded-lg focus:outline-none */}
          </div>

          <div className="">
            <label htmlFor="message" className="pb-2">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="massage"
              value={message}
              id="message"
              cols="30"
              rows="10"
              className={
                error
                  ? "flex-1 w-full p-1 pl-2 border-2 rounded-lg outline-0 active"
                  : "flex-1 w-full p-1 pl-2 border-2 rounded-lg outline-0"
              }
              placeholder="Send me a message and i'll reply you as soon as possible..."
            ></textarea>
            <p
              className={
                error
                  ? "errMessage hidden text-errorMessage active"
                  : "errMessage hidden text-errorMessage"
              }
            >
              Please enter a message
            </p>
          </div>

          {/* <div className="checkbox-container">
            <input
              type="checkbox"
              id="confirm"
              className="focus:outline-none cursor-pointer opacity-0 absolute"
            />
            <label htmlFor="confirm" className=" ">
              You agree to providing your data to name who may contact you.
            </label>
          </div> */}

          <label className="container">
            You agree to providing your data to name who may contact you.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <button
            id="btn__submit"
            className="px-10 py-3 mt-8 text-white text-center bg-backgroundBlue rounded-lg  focus:outline-none md:py-2 hover:bg-darkerBlue"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
