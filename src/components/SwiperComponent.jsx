import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import Button from "@components/commons/Button";
import { FaQuoteLeft } from "react-icons/fa";
const iconMap = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  google: FaGoogle,
  instagram: FaInstagram,
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { services } from "@constants/constant";

const SwiperComponent = ({ image, name, title, desc, socials = [] }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-50 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="pb-12"
      >
        {services.map((service, idx) => (
          <SwiperSlide
            key={service.name + idx}
            className="flex flex-col items-center my-10 "
          >
            <div className="bg-white rounded-xl shadow-lg pt-16 pb-8 px-6 max-w-xs mx-auto relative flex flex-col items-center">
              {/* Profile Image */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow object-cover bg-gray-100"
                />
              </div>
              {/* Name & Title */}
              <h3 className="mt-8 text-xl font-bold text-center text-gray-900">
                {name}
              </h3>
              <p className="text-cyan-500 text-sm font-semibold uppercase text-center mb-4">
                {title}
              </p>
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
              <Button className="bg-[var(--light-green)]  text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300">
                Show More
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
