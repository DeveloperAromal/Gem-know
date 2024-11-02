"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="fixed w-full z-50">
      {/* TOP NAV */}
      <header className="w-full h-10 bg-teal-700 flex justify-end items-center">
        <div className="flex gap-4 pb-1">
          <div className="flex items-center space-x-2 text-white">
            <span className="text-xs md:text-sm cursor-pointer hover:text-yellow-400">
              Engage ATS
            </span>
            <span>|</span>
            <span className="text-xs md:text-sm cursor-pointer hover:text-yellow-400">
              Canvas
            </span>
            <span>|</span>
            <span className="text-xs md:text-sm cursor-pointer hover:text-yellow-400">
              Contact Us
            </span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="cursor-pointer hover:text-sky-500"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer hover:text-sky-500"
            />
            <FontAwesomeIcon
              icon={faVimeo}
              className="cursor-pointer hover:text-pink-500"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
        <Link href="/dashboard">
          <button className="h-full w-32 md:w-40 text-center py-2 bg-yellow-400 hover:bg-teal-800 text-white ml-4 md:ml-10 hidden lg:block md:block transition-all duration-300">
            Parent Login
          </button>
        </Link>
      </header>
      {/* MAIN NAV */}
      <header className="w-full bg-white shadow-md">
        <nav className="flex justify-between items-center px-4 md:px-10 h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-24 md:h-20 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-teal-700 relative z-20"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          <ul
            className={`flex-col gap-10 absolute md:static top-8 left-0 w-full md:w-auto md:flex md:flex-row bg-white transition-transform duration-300  ${
              isMenuOpen ? "flex py-20" : "hidden"
            } text-teal-700 font-semibold`}
          >
            {[
              "Who We Are",
              "Membership",
              "Accreditation",
              "Resources",
              "Events",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer hover:text-yellow-500 p-2 md:p-0 text-center text-2xl md:text-base" // Adjusted text size for responsiveness
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  );
}
