import React from "react";
import Navbar from "@components/layout/Navbar";
import TopNavbar from "@components/layout/TopNavbar";
import Profile from "@assets/images/Profile.png";
import { services } from "@constants/constant";
import ServiceCard from "@components/ServiceCard";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";
import AntdSelect from "@components/commons/AntdSelect";
import { serviceOptions } from "@constants/constant";
import { ICONS } from "@constants/Icons";
import AntdDatePicker from "@components/commons/AntdDatePicker";
import RevealOnScroll from "../components/RevealOnScroll";

const LandingPage = () => {
  return (
    <div className="font-roboto">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <TopNavbar />
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="pt-24 bg-[var(--light-blue)] bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${Profile})`,
        }}
      >
        <RevealOnScroll>
          {" "}
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--black-text)]">
              YOUR MENTAL WELLNESS IS OUR{" "}
              <span className="text-[var(--maroon-color)]">PRIORITY</span>
            </h1>
            <p className="mt-4 text-[var(--gray-text)] max-w-xl mx-auto">
              We’re here to guide you on your journey to emotional well-being,
              balance, and mental clarity.
            </p>
            <div className="mt-6 flex justify-center">
              <InputField
                type="text"
                placeholder="Search for mental health services"
                className="p-4 rounded-l-md w-64"
              />
              <Button className="bg-[var(--primary-color)] text-[var(--white-text)] px-4 py-2 rounded-r-md hover:bg-[var(--dark-blue)]">
                Search
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Call to Action */}
      <div className="bg-[var(--medium-blue)] py-6 px-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <p className="text-[var(--gray-text)] text-xl font-roboto text-center md:text-left">
          Need support? Call us —{" "}
          <strong className="text-[var(--black-text)]">+1 800 123 4567</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <AntdSelect
            placeholder="Select a therapy"
            style={{ width: 200 }}
            options={serviceOptions}
          />
          <InputField placeholder="Your Name" className="w-full sm:w-48 " />
          <AntdDatePicker format="YYYY-MM-DD" />

          <Button className="bg-[var(--primary-color)] text-[var(--white-text)] px-4 py-2 rounded hover:bg-[var(--dark-blue)] w-full sm:w-72 text-center">
            Book a Session
          </Button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-[var(--white-text)]">
        <RevealOnScroll>
          {" "}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black-text)]">
              About Us
            </h2>
            <p className="text-center max-w-3xl mx-auto text-[var(--gray-text)] mb-12">
              At MindCare Clinic, we specialize in providing compassionate,
              evidence-based psychological care. Our team of licensed
              psychiatrists and therapists help individuals navigate depression,
              anxiety, trauma, and other mental health challenges with empathy
              and expertise.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  image={service.image}
                  desc={service.desc}
                  onMoreClick={() =>
                    console.log(`More clicked for ${service.title}`)
                  }
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--medium-blue)]">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black-text)]">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary-color)]">
                  Reach Out Today
                </h3>
                <p className="text-[var(--gray-text)] mb-2">
                  Address: 789 Serenity Avenue, Wellness City, NY
                </p>
                <p className="text-[var(--gray-text)] mb-2">
                  Phone: +1 800 123 4567
                </p>
                <p className="text-[var(--gray-text)]">
                  Email: support@mindcareclinic.com
                </p>
              </div>
              <form className="space-y-4">
                <InputField
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4"
                />
                <InputField
                  type="email"
                  placeholder="Your Email"
                  className="w-full "
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-[var(--gray-text)] rounded h-32"
                ></textarea>
                <Button className="bg-[var(--primary-color)] text-[var(--white-text)] px-6 py-2 rounded hover:bg-[var(--dark-blue)]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/03239199788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-[var(--white-text)] p-4 rounded-full shadow-lg flex items-center justify-center z-50"
        aria-label="Chat on WhatsApp"
      >
        {ICONS.whatsappIcon}
      </a>

      {/* Footer */}
      <footer className="bg-[var(--dark-blue)] text-[var(--white-text)] text-center py-8">
        <p>© 2025 MindCare Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
