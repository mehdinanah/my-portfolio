import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-15 text-center "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p>&copy; 2025 [MehdiNanah]. Tous droits réservés.</p>
    </motion.footer>
  );
};

export default Footer;
