import React from "react";
import Header from "./Header";
import Links from "./Links";
import Socials from "./Socials";
import Footer from "./Footer";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Header />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
