import "./Hero.css";
import React, { useState, useEffect } from "react";
import images from "./assets/images-obj";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-300 py-10 h-auto">
      {/* Heading */}
      <div className="mt-[30px] text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
           HIRE <span className="text-primary">TALENT</span>. BUILD {" "}
          <span className="text-secondary">FASTER</span>. {" "}
        </h1>
        <p className=" font-medium p-4 text-center text-lg text-gray-900">
         <span className="text-3xl text-primary">"</span> Connect with skilled freelancers and accelerate your projects with
          top-tier talent. <span className="text-primary text-3xl" >"</span>
        </p>
        <button className="cursor-pointer bg-red-500 rounded-md w-[100px] h-12 font-medium text-white" >GET START</button>
      </div>

      {/* Right-aligned column with carousel and button */}

      {/* Carousel Panel */}
      <div className="w-[350px] z-20 m-auto text-center mt-9 h-[350px] relative overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="m-auto text-center">
        <button className=" cursor-pointer z-10 px-6 py-3 mt-7 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          More Projects
        </button>
      </div>
    </div>
  );
}

export default Hero;

