"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/nunito";
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
    image: "/bg2.jpg",
    caption: "Heading back to school?",
    description: "Embrace the journey of learning and discovery.",
  },
  {
    image: "/bg3.jpg",
    caption: "Building a Brighter Tomorrow",
    description: "Together, we cultivate the leaders of tomorrow.",
  },
  {
    image: "/bg4.jpg",
    caption: "Where Knowledge Meets Excellence",
    description: "Join us in a pursuit of excellence and lifelong learning.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = (imageUrls: string[]) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const imageUrls = slides.map((slide) => slide.image);
    preloadImages(imageUrls);

    // Check if all images are loaded
    const imagesLoaded = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
      });
    });

    Promise.all(imagesLoaded).then(() => {
      setLoading(false);
    });

    // Change slide every 5 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden">
      <AnimatePresence>
        {!loading &&
          slides.map(
            (slide, i) =>
              i === index && (
                <motion.div
                  key={i}
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundColor: "transparent", // Fallback color during image load
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )
          )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-center px-4 md:px-8 mt-40"> {/* Adjusted mt-20 to push text a bit lower */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto"
            style={{ fontFamily: "Nunito", fontWeight: 700 }}
          >
            {slides[index].caption}
          </h1>
          <p
            className="text-sm sm:text-xl md:text-2xl lg:text-xl text-gray-300 font-bold max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto mt-4"
            style={{ fontFamily: "Nunito", fontWeight: 400 }}
          >
            {slides[index].description}
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-yellow-500 px-8 py-3 md:px-10 md:py-4 font-bold text-white hover:bg-teal-800 transition-all duration-200">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <SideBanner />
    </section>
  );
}
