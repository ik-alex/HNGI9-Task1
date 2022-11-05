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
          id="link-form"
          class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            id="link-input"
          />

          <button
            class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten It!
          </button>

          <!-- Error Message -->
          <div
            id="err-msg"
            class="absolute left-7 bottom-3 text-red text-sm italic"
          ></div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
