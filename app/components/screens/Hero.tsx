"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/nunito";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SideBanner from "../includes/SideBanner";

interface Slide {
  image: string;
  caption: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/bg1.jpg",
    caption: "Gem Know Model Higher Secondary School",
    description: "A place where dreams take flight and futures are shaped.",
  },
  {
    image: "http://demo.code9tech.com/gemknow/img/slide-2.jpg",
    caption: "Heading back to school?",
    description: "Embrace the journey of learning and discovery.",
  },
  {
    image: "http://demo.code9tech.com/gemknow/img/slide-1.jpg",
    caption: "Building a Brighter Tomorrow",
    description: "Together, we cultivate the leaders of tomorrow.",
  },
  {
    image: "http://demo.code9tech.com/gemknow/img/slide-3.jpg",
    caption: "Where Knowledge Meets Excellence",
    description: "Join us in a pursuit of excellence and lifelong learning.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (i: number) => {
    setIndex(i);
  };

  return (
    <section className="h-screen w-full relative overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, i) =>
            i === index && (
              <motion.div
                key={i}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.8, type: "spring" }}
              />
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center h-screen">
        <div className="text-center px-4 md:px-8 mt-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto drop-shadow-lg"
            style={{ fontFamily: "Nunito", fontWeight: 700 }}
          >
            {slides[index].caption}
          </h1>
          <p
            className="text-sm sm:text-xl md:text-2xl lg:text-xl text-gray-300 font-bold max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto mt-4 drop-shadow-md"
            style={{ fontFamily: "Nunito", fontWeight: 400 }}
          >
            {slides[index].description}
          </p>
          <div className="flex justify-center mt-6">
            <button className="relative bg-yellow-500 px-8 py-3 md:px-10 md:py-4 font-bold text-white hover:bg-teal-700 transition-all duration-300 rounded-md shadow-md">
              <span className="relative z-10">Discover More</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="bg-black/50 text-white p-3 rounded-full m-4 hover:bg-black/70 transition"
        >
          <FaChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="bg-black/50 text-white p-3 rounded-full m-4 hover:bg-black/70 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      <SideBanner />
    </section>
  );
}
