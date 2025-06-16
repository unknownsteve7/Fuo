"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/chair.png",
  "/Chair1.png",
  "/Chair2.png",
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto h-[600px] overflow-hidden ">
      {/* Image Slides */}
      <div className="absolute inset-0 flex transition-all duration-700 ease-in-out h-[600px]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            width={600}
            height={400}
            className={`absolute left-100 w-[600px] h-[600px] object-contain transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-center text-black">
        <h1 className="text-6xl font-extrabold">FUO CHAIR</h1>
        <p className="text-lg mt-2">Designed for comfort, crafted for elegance.</p>
      </div>

      {/* Navigation Buttons */}

    </div>
  );
};

export default Carousel;