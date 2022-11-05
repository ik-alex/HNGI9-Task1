import React from "react";
import Header from "./Header";
import Links from "./Links";
import Socials from "./Socials";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Links />
      <Socials />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
