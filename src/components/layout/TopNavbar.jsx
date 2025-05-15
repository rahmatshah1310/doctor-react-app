import React from "react";
import { ICONS } from "@constants/Icons";

const TopNavbar = () => {
  return (
    <div className="bg-[var(--white-text)] text-[var(--white-text)] py-2 px-4 flex justify-around items-center text-sm fixed top-0 left-0 w-full shadow-md z-50 font-roboto">
      <div>
        <span className="font-bold text-[var(--black-text)]">
          📞 00 555 888
        </span>
      </div>
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
      </div>
    </div>
  );
};

export default TopNavbar;
