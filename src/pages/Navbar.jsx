import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg fixed top-0 left-0 w-full z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a className="text-4xl font-bold text-white transition-transform transform hover:scale-105" href="#hero">Portofolio</a>
        <div className="hidden lg:flex space-x-8">
          <a className="text-lg text-white hover:opacity-80 transition-opacity" href="#hero">About</a>
          <a className="text-lg text-white hover:opacity-80 transition-opacity" href="#projects">Projects</a>
          <a className="text-lg text-white hover:opacity-80 transition-opacity" href="#contact">Contact</a>
        </div>
        <button onClick={handleToggle} className="lg:hidden text-white text-3xl transition-transform hover:scale-110">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-purple-400 to-pink-400 p-6 rounded-lg shadow-md transition-all">
          <ul className="space-y-4">
            <li>
              <a className="block text-lg text-white hover:opacity-80 transition-opacity" href="#hero" onClick={handleToggle}>About</a>
            </li>
            <li>
              <a className="block text-lg text-white hover:opacity-80 transition-opacity" href="#projects" onClick={handleToggle}>Projects</a>
            </li>
            <li>
              <a className="block text-lg text-white hover:opacity-80 transition-opacity" href="#contact" onClick={handleToggle}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
