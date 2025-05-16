import React from "react";

const ServiceCard = ({ name, title, image, desc, onMoreClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{desc}</p>
        <button
          onClick={onMoreClick}
          className="mt-4 bg-[var(--light-green)] text-white px-4 py-2 rounded self-star bg-cover"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
