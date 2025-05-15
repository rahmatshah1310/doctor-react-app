import React from "react";

const ServiceCard = ({ title, image, desc, onMoreClick }) => {
  return (
    <div className="bg-[var(--white-text)] rounded-lg shadow-md overflow-hidden flex flex-col font-roboto">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[var(--black-text)]">
          {title}
        </h3>
        <p className="text-[var(--gray-text)] text-sm mt-2 flex-grow">{desc}</p>
        <button
          onClick={onMoreClick}
          className="mt-4 bg-[var(--primary-color)] text-[var(--white-text)] px-4 py-2 rounded hover:bg-[var(--dark-blue)] transition-colors duration-300 self-start"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
