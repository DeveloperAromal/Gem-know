"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenWindow = () => {
    const url = "https://gem-know-dashboard.vercel.app/dashboard"; // Replace with your desired URL
    const options =
      "width=1000,height=600,left=100,top=100,resizable=yes,scrollbars=yes"; // Adjust options as needed

    window.open(url, "_blank", options);
  };

  return (
    <section className="fixed w-full z-50">
      {/* TOP NAV */}
      <header className="w-full h-10 bg-teal-700 flex justify-end items-center">
        <div className="flex gap-4 pb-1">
          <div className="flex items-center space-x-2 text-white">
            <span className="text-xs md:text-sm cursor-pointer hover:text-yellow-400">
             Gem Know
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
        <button
          className="h-full w-32 md:w-40 text-center py-2 bg-yellow-400 hover:bg-teal-800 text-white ml-4 md:ml-10 hidden lg:block md:block transition-all duration-300"
          onClick={handleOpenWindow}
        >
          Parent Login
        </button>
      </header>
      {/* MAIN NAV */}
      <header className="w-full bg-white shadow-md">
        <nav className="flex justify-between items-center px-4 md:px-10 h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <motion.img
              src="/logoco.avif"
              alt="Logo"
              width={230}
              height={200}
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
            className={`flex-col gap-8 absolute md:static top-8 left-0 w-full md:w-auto md:flex md:flex-row bg-white transition-transform duration-300  ${
              isMenuOpen ? "flex py-20" : "hidden"
            } text-teal-700 font-semibold`}
          >
            {[
              { name: "Who We Are", href: "/academics/who-we-are" },
              { name: "Membership", href: "/membership" },
              { name: "Accreditation", href: "/accreditation" },
              { name: "Resources", href: "/resources" },
              { name: "Events", href: "/events" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer hover:text-yellow-500 p-2 md:p-0 text-center text-2xl md:text-base" // Adjusted text size for responsiveness
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
            <div className="flex items-center justify-center">
              <button
                className="text-center px-4 py-2 bg-yellow-400 hover:bg-teal-800 text-white md:ml-10 block lg:hidden md:hidden transition-all duration-300"
                onClick={handleOpenWindow}
              >
                Parent Login
              </button>
            </div>
          </ul>
        </nav>
      </header>
    </section>
  );
}
