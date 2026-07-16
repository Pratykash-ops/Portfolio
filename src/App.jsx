import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
              <Helmet>
                <title>Pratyaksh Baghel | Full-Stack Developer & Technical Strategist</title>
                <meta name="description" content="Hi, I'm Pratyaksh Baghel! I'm a Full-Stack Developer and Technical Strategist. Welcome to my portfolio, where you can explore my innovative projects, scalable web architectures, and creative digital solutions." />
                <meta name="keywords" content="Pratyaksh Baghel, Full-Stack Developer, Technical Strategist, Portfolio, Web Developer, React, Node.js" />
                <meta name="author" content="Pratyaksh Baghel" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://pratyaksh.dev/" />
                <meta property="og:title" content="Pratyaksh Baghel | Full-Stack Developer & Technical Strategist" />
                <meta property="og:description" content="Hi, I'm Pratyaksh Baghel! I'm a Full-Stack Developer and Technical Strategist. Welcome to my portfolio, where you can explore my innovative projects, scalable web architectures, and creative digital solutions." />
                <meta property="og:image" content="https://pratyaksh.dev/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pratyaksh Baghel | Full-Stack Developer & Technical Strategist" />
                <meta name="twitter:description" content="Hi, I'm Pratyaksh Baghel! I'm a Full-Stack Developer and Technical Strategist. Welcome to my portfolio, where you can explore my innovative projects and creative digital solutions." />
                <meta name="twitter:image" content="https://pratyaksh.dev/og-image.png" />
              </Helmet>
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
