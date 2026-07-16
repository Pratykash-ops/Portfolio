import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Pratyaksh Baghel</title>
        <meta name="description" content="Here you can read the Terms and Conditions for using my professional portfolio website. I like to keep things clear and transparent!" />
        <meta name="keywords" content="Terms and Conditions, Pratyaksh Baghel, Portfolio Terms, Web Developer Terms" />
        <meta name="author" content="Pratyaksh Baghel" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pratyaksh.minamilabs.in/terms-and-conditions" />
        <meta property="og:title" content="Terms and Conditions | Pratyaksh Baghel" />
        <meta property="og:description" content="Here you can read the Terms and Conditions for using my professional portfolio website. I like to keep things clear and transparent!" />
        <meta property="og:image" content="https://pratyaksh.minamilabs.in/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | Pratyaksh Baghel" />
        <meta name="twitter:description" content="Here you can read the Terms and Conditions for using my professional portfolio website. I like to keep things clear and transparent!" />
        <meta name="twitter:image" content="https://pratyaksh.minamilabs.in/og-image.png" />
      </Helmet>
      <section className="c-space section-spacing text-neutral-300 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto border border-white/10 p-8 rounded-2xl bg-black/50 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white mb-6">Terms and Conditions</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Introduction</h2>
        <p className="mb-4">Welcome to my portfolio website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Communication and Data Collection</h2>
        <p className="mb-4">When you use the contact form on this website, you agree to provide accurate information. The contact form is intended for professional inquiries, project discussions, and related communications. By submitting the form, you acknowledge that your name, email, and message will be transmitted for the purpose of correspondence.</p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Intellectual Property</h2>
        <p className="mb-4">All content on this website, including but not limited to text, graphics, logos, and project showcases, is my intellectual property unless otherwise stated. You may not reproduce, distribute, or use this content without explicit permission.</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Limitation of Liability</h2>
        <p className="mb-4">I strive to keep the information on this website accurate and up-to-date, but I make no warranties regarding the completeness or accuracy of the content. I will not be liable for any damages arising from the use of this website.</p>
      </div>
    </section>
    </>
  );
};

export default TermsAndConditions;
