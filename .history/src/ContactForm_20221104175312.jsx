import React from "react";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
      <section className="container mx-auto p-6 py-8 md:max-w-4xl">
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
          <div className="flex flex-col space-y-4">
            <div className="">
              <p></p>
              <input
                type="text"
                id="first_name"
                className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
                placeholder="Shorten a link here"
              />
            </div>
            <div className="">
              <p></p>
              <input
                type="text"
                id="last_name"
                className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
                placeholder="Shorten a link here"
              />
            </div>
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
