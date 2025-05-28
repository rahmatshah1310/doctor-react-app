import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  itemVariants,
} from "@utils/animationVariants";
import Navbar from "@components/layout/Navbar";
import TopNavbar from "@components/layout/TopNavbar";
import Profile from "@assets/images/Profile.png";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";
import AntdSelect from "@components/commons/AntdSelect";
import { ICONS } from "@constants/Icons";
import AntdDatePicker from "@components/commons/AntdDatePicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperComponent from "@components/SwiperComponent";
import {
  BookingContent,
  AppointmentFields,
  HomeSlides,
  serviceOptions,
} from "@constants/constant";

const LandingPage = () => {
  console.log(HomeSlides, "homeslides..............");
  return (
    <motion.div
      className="font-roboto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <TopNavbar />
      <Navbar />

      {/* Home Section */}
      <section id="home" className="w-full h-[80vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {HomeSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap md:flex-nowrap md:justify-between xs:flex-col">
            {/* Appointment Form Section */}
            <div className="w-full px-4 mb-8 lg:mb-0 bg-[var(--light-green)]">
              <div className="p-8 w-full md:w-[70%] ml-auto">
                <motion.h2
                  className="text-3xl font-bold text-[var(--white-text)] mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Make An Appointment
                </motion.h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {AppointmentFields.map((field, index) => (
                      <motion.div
                        key={field.name}
                        className="custom-ant-input"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <label className="block text-sm font-semibold uppercase text-[var(--white-text)] mb-2">
                          {field.label}
                        </label>
                        <InputField
                          type={field.type}
                          placeholder={field.placeholder}
                          className="ant-input-outlined w-full p-3 border-b !placeholder-[var(--white-text)] border-gray-300 !text-[var(--white-text)] !focus-within:outline-0 !bg-transparent"
                        />
                      </motion.div>
                    ))}

                    {/* Doctor Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-semibold uppercase text-[var(--white-text)] my-2">
                        SELECT A DOCTOR
                      </label>
                      <select className="w-full p-3 border-gray-300 text-[var(--white-text)] border-b outline-none">
                        <option>Dr. Lloyd Wilson</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold uppercase text-[var(--white-text)] mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      placeholder="Message"
                      className="w-full p-3 rounded-lg border border-gray-30 focus:outline-0 focus-within:border-[var(--white-text)] h-32"
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button className="w-full bg-[var(--white-text)] text-[var(--light-green)] px-8 py-4 rounded-lg font-semibold transition-colors">
                      Make An Appointment
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full">
              <motion.div
                className="bg-[var(--light-white)] p-8 text-white h-full"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl mb-2 text-[#00BCD4] font-bold"
                >
                  OUR SERVICES
                </motion.h3>
                <motion.h4
                  variants={itemVariants}
                  className="mb-8 text-[var(--black-text)] font-medium text-2xl sm:text-3xl md:text-4xl "
                >
                  What We Offer
                </motion.h4>

                <motion.div variants={staggerContainer}>
                  {BookingContent.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="mb-8 flex items-center md:w-[60%] p-6 bg-[var(--white-text)] hover:bg-[var(--light-green)] group"
                    >
                      <div>
                        <h5 className="text-xl font-bold mb-4 text-black group-hover:text-[var(--white-text)]">
                          {service.title}
                        </h5>
                        <p className="text-gray-300 leading-relaxed">
                          {service.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[var(--white-text)]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-[var(--black-text)]"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto text-[var(--gray-text)] mb-12"
          >
            At MindCare Clinic, we specialize in providing compassionate,
            evidence-based psychological care. Our team of licensed
            psychiatrists and therapists help individuals navigate depression,
            anxiety, trauma, and other mental health challenges with empathy and
            expertise.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <SwiperComponent
              image={Profile}
              name="Dr. Lloyd Wilson"
              title="Head Dentist"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
              socials={[
                { type: "twitter", url: "https://twitter.com/" },
                { type: "facebook", url: "https://facebook.com/" },
                { type: "google", url: "https://google.com/" },
                { type: "instagram", url: "https://instagram.com/" },
              ]}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--medium-blue)]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-[var(--black-text)]"
          >
            Contact Us
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInLeft}>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold mb-4 text-[var(--primary-color)]"
              >
                Reach Out Today
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-[var(--gray-text)] mb-2"
              >
                Address: Ashfaq Neuropsychiatric and General Hospital Kotanai
                Khwaza Khela, Khwaza Khela
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-[var(--gray-text)] mb-2"
              >
                Phone: +92 946 744760
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-[var(--gray-text)]"
              >
                Email: support@mindcareclinic.com
              </motion.p>
            </motion.div>
            <motion.form variants={fadeInRight} className="space-y-4">
              <motion.div variants={itemVariants}>
                <InputField
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <InputField
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border placeholder:text-[var(--white-text)] text-[var(--white-text)] border-[var(--white-text)] outline-0 rounded h-32"
                ></textarea>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[var(--light-green)] text-[var(--white-text)] px-6 py-2 rounded">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/03239199788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-[var(--whatsapp-green)] p-4 z-50"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {ICONS.whatsappIcon}
      </motion.a>

      {/* Footer */}
      <motion.footer
        className="bg-[var(--light-green)] text-[var(--white-text)] text-center py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2025 MindCare Clinic. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;
