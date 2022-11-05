import React from "react";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
      <section className="container mx-auto p-6 py-8 md:max-w-4xl">
        <div className=" mx-auto container flex flex-col-2">
          <h2 className="text-extrabold text-3xl bg-red-500">Contact Me</h2>
          <p className="max-w-sm md:max-w-full">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
