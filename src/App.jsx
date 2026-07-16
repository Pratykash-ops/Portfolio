import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import FullAbout from "./sections/FullAbout";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import TermsAndConditions from "./sections/TermsAndConditions";
import PrivacyPolicy from "./sections/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experiences />
              <Contact />
            </>
          } />
          <Route path="/about" element={<FullAbout />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
