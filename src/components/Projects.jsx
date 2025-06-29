import React from 'react';
import { motion } from 'framer-motion';
import consoleImg from '../assets/console-project.png';
import deliciousImg from '../assets/delicious-project.png';

const projects = [
 {
  name: 'Yummy Nanah',
  description:
    'Yummy Nanah is a modern and fully responsive restaurant website built using HTML, CSS, JavaScript, and Bootstrap. It features a clean UI and smooth navigation across essential sections like Home, About, Menu, Chefs, Events, Gallery, and Contact.',
  link: 'https://github.com/mehdinanah/yummy-nanah',
  image: consoleImg, 
},

  {
    name: 'arrya',
    description:
      'A responsive and visually appealing web application built using modern front-end technologies...',
    link: 'https://github.com/mehdinanah/arrya.git',
    image: deliciousImg,
  },
   
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Mes Projets</h2>
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
          >
            {project.image && (
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            )}

            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              {project.name}
            </h3>
            <p className="text-gray-700 whitespace-pre-line mb-4">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                🔗 Voir sur GitHub
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
