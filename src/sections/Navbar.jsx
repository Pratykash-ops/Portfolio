import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="flex flex-col sm:flex-row items-center gap-6">
      <li>
        <Link className="text-neutral-400 hover:text-white transition-colors" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-neutral-400 hover:text-white transition-colors" to="/about">
          About
        </Link>
      </li>
      <li>
        <a className="text-neutral-400 hover:text-white transition-colors" href="/#work">
          Work
        </a>
      </li>
      <li>
        <a className="text-neutral-400 hover:text-white transition-colors" href="/#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-xl font-bold transition-colors text-white hover:text-indigo-400"
          >
            Pratyaksh Baghel
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          
          <nav className="hidden sm:flex items-center">
            <Navigation />
          </nav>
        </div>

        {isOpen && (
          <motion.div
            className="block sm:hidden px-6 pb-6 pt-2 border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-4 mt-2">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
