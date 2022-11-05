import React from "react";
import Header from "./Header";
import Links from "./Links";
import Socials from "./Socials";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <>
            <Header />
            <Links />
            <Socials />
            <Footer />
          </>
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
{
  /* */
}
