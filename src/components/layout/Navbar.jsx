import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-9 left-0 w-full bg-[var(--white-text)] shadow-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold text-[var(--primary-color)]">
          DentaCare
        </div>
        <div className="space-x-6">
          <a
            href="#home"
            className="text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
