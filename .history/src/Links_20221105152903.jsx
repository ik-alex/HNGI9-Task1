import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="">
      <div className=" mx-auto container px-8 md:px-16">
        {Data.map((info) => {
          return (
            <>
              <a
                id={info.keyId}
                className="block bg-darkGrey rounded-lg text-center mb-4  py-4 px-6 md:px-8 hover:cursor-pointer hover:bg-hoverGrey"
                href={info.link}
              >
                {info.title}
              </a>
            </>
          );
        })}

        <Link
          id="contact"
          className="block bg-darkGrey rounded-lg text-center mb-4  py-4 px-6 md:px-8 hover:cursor-pointer hover:bg-hoverGrey"
          to="/contact"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default Links;
