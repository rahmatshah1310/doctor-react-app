import React from "react";
import { ICONS } from "@constants/Icons";

const TopNavbar = () => {
  return (
    <div className="bg-[var(--white-text)] text-[var(--white-text)] py-2 px-4 flex justify-end  items-center text-sm fixed top-0 left-0 pr-20 w-full shadow-md z-10 font-roboto">
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-[var(--medium-blue)] transition-colors duration-300"
        >
          {ICONS.facebookIcon}
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-[var(--medium-blue)] transition-colors duration-300"
        >
          {ICONS.twitterIcon}
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-color)] hover:text-[var(--medium-blue)] transition-colors duration-300"
        >
          {ICONS.instagramIcon}
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
