"use client";

import { useState } from "react";

const AnimatedMenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 flex flex-col justify-center items-start cursor-pointer relative"
      >
        {/* Top bar */}
        <span
          className={`absolute h-1 w-6 rounded-full bg-red-500 transform transition duration-300 ease-in-out 
            ${isOpen ? "rotate-45 top-4" : "top-2.5"}
          `}
        ></span>

        {/* Bottom bar */}
        <span
          className={`absolute h-1 w-6 rounded-full bg-black transform transition duration-300 ease-in-out 
            ${isOpen ? "-rotate-45 top-4" : "top-4.5"}
          `}
        ></span>
      </div>

      {/* Full-Page Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform duration-500 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button inside sidebar */}
        <div 
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-5 cursor-pointer text-xl font-bold"
        >
          <span className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="red">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
            </svg>
          </span>
        </div>

        <ul className="p-5 space-y-3 mt-10 text-7xl start">
         <a href="/"><li className="text-black  border-b border-dotted border-gray-500 pb-2 cursor-pointer">Home</li></a>
          <a href="#"><li className="text-black  border-b border-dotted border-gray-500 pb-2 cursor-pointer">About</li></a>
          <a href="#"><li className="text-black  border-b border-dotted border-gray-500 pb-2 cursor-pointer">Services</li></a>
          <a href="#"><li className="text-black  cursor-pointer">Contact</li></a>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedMenuIcon;