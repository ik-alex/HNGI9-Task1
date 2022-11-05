import React, { useState } from "react";
import Footer from "./Footer";

const ContactForm = () => {
  const [message, setMessage] = useState();
  handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = document.querySelector(".errMessage");
    const textArea = document.querySelector("#message");
    if (message === "") {
      errMsg.classList.add("active");
      textArea.classList.add("active");

      setTimeout(() => {
        errMsg.classList.remove("active");
        textArea.classList.remove("active");
      }, 4000);
    } else {
      alert("Form Submitted Success");
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
        <form
          onSubmit={handleSubmit}
          id=""
          className=" flex flex-col w-full py-10 space-y-4  rounded-lg "
        >
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between">
            <div className=" w-full">
              <label for="name" className="pb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="checedkbox-container flex-1 w-full p-1 pl-2 border-2 rounded-lg focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
            <div className=" w-full">
              <label for="name" className="pb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="checedkbox-container flex-1 w-full p-1 pl-2 border-2 rounded-lg  focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className=" ">
            <label for="email" className="pb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="checedkbox-container flex-1 w-full p-1 pl-2 border-2 rounded-lg  focus:outline-none"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="">
            <label for="massage" className="pb-2">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="massage"
              value={message}
              id="message"
              cols="30"
              rows="10"
              className="flex-1 w-full p-1 pl-2 border-2 rounded-lg outline-0"
              placeholder="Send me a message and i'll reply you as soon as possible..."
            ></textarea>
            <p className="errMessage hidden text-errorMessage">
              Please enter a message
            </p>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="confirm"
              className="focus:outline-none cursor-pointer opacity-0 absolute"
            />
            <label for="confirm" className=" ">
              You agree to providing your data to `{}` who may contact you.
            </label>
          </div>

          <a
            href="#"
            id="btn__submit"
            className="px-10 py-3 mt-8 text-white text-center bg-backgroundBlue rounded-lg  focus:outline-none md:py-2 hover:bg-darkerBlue"
          >
            Send Message
          </a>
        </form>
      </section>
    </>
  );
};

export default ContactForm;