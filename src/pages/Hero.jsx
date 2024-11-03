import React, { useEffect, useRef } from "react";
import heroImage from "../assets/kristina.jpeg";

function Hero() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Animation effects for title, text, and image
  useEffect(() => {
    setTimeout(() => {
      titleRef.current.classList.remove("opacity-0");
      titleRef.current.classList.add("opacity-100");
      textRef.current.classList.remove("opacity-0");
      textRef.current.classList.add("opacity-100");
      imageRef.current.classList.add("scale-100");
    }, 300);
  }, []);

  return (
    <div
      id="hero"
      className="hero bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100 min-h-screen flex items-center justify-center p-8"
    >
      <div className="hero-content flex flex-col lg:flex-row items-center text-center lg:text-left p-8 rounded-3xl shadow-2xl bg-white/80 max-w-3xl transition-transform duration-500 transform hover:scale-105 backdrop-blur-md">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Kristina Sitorus"
          className="max-w-xs lg:max-w-sm rounded-full shadow-lg transform scale-75 transition-transform duration-700 ease-out opacity-90 hover:scale-100"
        />
        <div className="lg:ml-8">
          <h1
            ref={titleRef}
            className="text-5xl font-bold text-purple-600 mb-3 opacity-0 transition-opacity duration-1000"
          >
            Kristina Sitorus
          </h1>
          <p
            ref={textRef}
            className="py-4 text-gray-700 leading-relaxed opacity-0 transition-opacity duration-1000 delay-200"
          >
            Semester 5 IT student with a passion for{" "}
            <span className="font-semibold text-purple-600">UI Design</span>,{" "}
            <span className="font-semibold text-pink-600">Software Testing</span>, and{" "}
            <span className="font-semibold text-blue-600">Project Management</span>. Skilled in{" "}
            <span className="font-semibold">Figma</span>,{" "}
            <span className="font-semibold">CorelDRAW</span>, and more.
          </p>
          <a
            href="#projects"
            className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
