import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Pratyaksh Baghel</title>
        <meta name="description" content="Privacy policy regarding data collection and usage on the portfolio website of Pratyaksh Baghel." />
      </Helmet>
      <section className="c-space section-spacing text-neutral-300 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto border border-white/10 p-8 rounded-2xl bg-black/50 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Information Collection</h2>
        <p className="mb-4">When you use the contact form on my portfolio, I collect the following personal information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Your Name</li>
          <li>Your Email Address</li>
          <li>The contents of your message</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. How I Use Your Information</h2>
        <p className="mb-4">The information collected via the contact form is used exclusively for:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Responding to your inquiries or messages.</li>
          <li>Discussing potential projects, job opportunities, or collaborations.</li>
        </ul>
        <p className="mb-4">Your email address will <strong>never</strong> be used for marketing purposes, added to any mailing lists, or sold or shared with third parties.</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Data Storage and Third-Party Services</h2>
        <p className="mb-4">The contact form utilizes EmailJS to securely transmit your message to my personal email inbox. I do not store your data in a separate database; it is only retained in my email history for reference during our communication.</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Your Rights</h2>
        <p className="mb-4">You have the right to request the deletion of any email correspondence we have had. If you wish for me to delete your emails from my inbox, simply reply to our thread or send a new message requesting so.</p>
      </div>
    </section>
    </>
  );
};

export default PrivacyPolicy;
