import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white py-7 shadow-md mb-0.4"
    >
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <h1 className="text-2xl font-bold">MehdiNanah</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-indigo-400  ">Accueil</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projets</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
