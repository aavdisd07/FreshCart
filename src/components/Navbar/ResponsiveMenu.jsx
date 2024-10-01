import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-10">
                <li className="border-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-white">
                  Home
                </li>
                <li className="border-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-white">
                  About
                </li>
                <li className="border-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-white">
                  Services
                </li>
                <li className="border-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-white">
                  Contact
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
