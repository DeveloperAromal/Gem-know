"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import CustomHeader from "@/app/components/includes/CustomHeader";
import Footer from "@/app/components/screens/Footer";

export default function AboutUs() {
  return (
    <section>
        <CustomHeader />
      <section className="bg-school w-full h-[500px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-transparent opacity-80"></div>
        <h1 className="text-5xl font-semibold text-white z-10">About Us</h1>
      </section>

      <div className="pt-20 flex items-center justify-center gap-8 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/about.png" alt="About" width={600} height={600} className="rounded-lg shadow-lg" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-800 max-w-md space-y-4"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            reprehenderit quidem nulla expedita alias natus nesciunt, quibusdam
            quo dolores sit incidunt unde itaque eum nam tempore eaque aperiam
            dolore ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            reprehenderit quidem nulla expedita alias natus nesciunt, quibusdam
            quo dolores sit incidunt unde itaque eum nam tempore eaque aperiam
            dolore ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            reprehenderit quidem nulla expedita alias natus nesciunt, quibusdam
            quo dolores sit incidunt unde itaque eum nam tempore eaque aperiam
            dolore ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            reprehenderit quidem nulla expedita alias natus nesciunt, quibusdam
            quo dolores sit incidunt unde itaque eum nam tempore eaque aperiam
            dolore ducimus.
          </p>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}
