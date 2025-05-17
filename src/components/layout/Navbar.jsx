import React, { useState } from "react";
import Logo from "@assets/images/logo.jpg";
import MainLogo from "@assets/images/MainLogo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-7  left-0 w-full bg-[var(--light-green)] shadow-md z-10">
      <div className="max-w-[100rem] mx-auto flex justify-between items-center px-4 py-2">
        <div className="text-[var(--primary-color)]">
          <Link to="/">
            <img
              src={MainLogo}
              alt="logo"
              className="w-30 left-10 h-20 md:w-44 md:h-24 sm:w-12 sm:h-12 object-cover  fixed top-0 md:left-18 z-50"
            />
          </Link>
        </div>
        <div className="space-x-12  hidden xl:flex text-[12px] font-medium ">
          <a
            href="#home"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)]  transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)]  transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)]  transition-colors duration-300"
          >
            About Us
          </a>

          <a
            href="#contact"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)] transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#events"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)] transition-colors duration-300"
          >
            Events
          </a>
          <a
            href="#news"
            className="text-[var(--white-text)] hover:text-[var(--gray-text)] transition-colors duration-300"
          >
            News
          </a>
        </div>
        <button
          className="xl:hidden text-2xl text-[var(--white-text)] focus:outline-none z-20 sm:pr-6"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {menuOpen && (
          <div className="fixed w-full top-17 bg-[var(--light-green)] left-0 right-0 text-[var(--white-text)] shadow-lg flex flex-col items-center p-6 gap-4 xl:hidden animate-fade-in z-30">
            <a
              href="#home"
              className="hover:text-[var(--primary-color)] text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[var(--primary-color)] text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--primary-color)] text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#events"
              className="text-[var(--white-text)] hover:text-[var(--gray-text)] transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="#news"
              className="text-[var(--white-text)] hover:text-[var(--gray-text)] transition-colors duration-300"
            >
              News
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
