import React from "react";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
      <section className="container mx-auto p-6 py-8 md:max-w-2xl">
        <div className=" mx-auto container flex flex-col space-y-4">
          <h2 className="text-extrabold text-3xl bg-red-500">Contact Me</h2>
          <p className="max-w-sm md:max-w-full">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form
          id=""
          className=" flex flex-col w-full py-10 space-y-4  rounded-lg "
        >
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between">
            <div className="w-full">
              <label className="pb-2">First Name</label>
              <input
                type="text"
                id="first_name"
                className="flex-1 w-full p-1 pl-2 border-2 rounded-lg focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-full">
              <label className="pb-2">Last Name</label>
              <input
                type="text"
                id="last_name"
                className="flex-1 w-full p-1 pl-2 border-2 rounded-lg  focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="">
            <label className="pb-2">Email</label>
            <input
              type="text"
              id="email"
              className="flex-1 w-full p-1 pl-2 border-2 rounded-lg  focus:outline-none"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="">
            <label className="pb-2">Message</label>
            <input
              type="textarea"
              id="message"
              className="flex-1 w-full p-1 pl-2 border-2 rounded-lg h-24  focus:outline-none"
              placeholder="Send me a message and i'll reply you as soon as possible..."
            />
          </div>

          <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It!
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
