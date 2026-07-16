import { mySocials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
        <p>|</p>
        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Pratyaksh Ali. All rights reserved.</p>
    </section>
  );
};

export default Footer;
