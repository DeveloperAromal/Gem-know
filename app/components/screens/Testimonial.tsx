"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";


interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    title: "CEO",
    company: "Example Company",
    image: "/img-9.jpg",
    quote:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    name: "June Doe",
    title: "CEO",
    company: "Example Company",
    image: "/img-5.jpg",
    quote:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    id: 3,
    name: "John Doe",
    title: "CEO",
    company: "Example Company",
    image: "/img-4.jpg",
    quote:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <div className="flex items-center justify-center p-4">
        <button onClick={handlePrev} className="text-gray-500 p-2">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>

        <div className="relative w-80 mx-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center"
            >
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                height={100}
                width={100}
                className="rounded-full w-16 h-16 mb-2"
              />
              <p className="text-gray-700 text-sm italic mb-4">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <h4 className="font-semibold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500 text-xs">
                {testimonials[currentIndex].title},{" "}
                {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={handleNext} className="text-gray-500 p-2">
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
