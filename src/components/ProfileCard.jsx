import React from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const iconMap = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  google: FaGoogle,
  instagram: FaInstagram,
};

const ProfileCard = ({ image, name, title, desc, socials = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg pt-16 pb-8 px-6 max-w-xs mx-auto relative flex flex-col items-center">
      {/* Profile Image */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-white shadow object-cover bg-gray-100"
        />
      </div>
      {/* Name & Title */}
      <h3 className="mt-8 text-xl font-bold text-center text-gray-900">{name}</h3>
      <p className="text-cyan-500 text-sm font-semibold uppercase text-center mb-4">{title}</p>
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4">
        {socials.map(({ type, url }, idx) => {
          const Icon = iconMap[type];
          return (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg transition-colors"
            >
              {Icon && <Icon />}
            </a>
          );
        })}
      </div>
      {/* Description */}
      <p className="text-gray-500 text-center text-base mt-2">{desc}</p>
    </div>
  );
};

export default ProfileCard; 