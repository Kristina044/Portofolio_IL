import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  // Define the scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-700 dark:text-gray-300 py-8 flex flex-col items-center rounded-t-3xl shadow-inner mt-0 space-y-4">
      {/* Copyright Text */}
      <p className="text-center text-sm md:text-base font-light">
        &copy; {new Date().getFullYear()} Kristina Sitorus. All Rights Reserved.
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 text-sm font-light bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <FaArrowCircleUp className="text-white text-lg" />
        <span className="text-white">Back to Top</span>
      </button>
    </footer>
  );
};

export default Footer;
