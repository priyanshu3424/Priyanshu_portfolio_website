import React from 'react';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  return (
    <section id="resume" className="resume-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Resume
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Download my latest resume for a detailed look at my skills.
      </motion.p>

      <motion.a
        href="/path/to/your/resume.pdf" // <-- REMEMBER TO REPLACE THIS WITH THE ACTUAL PATH TO YOUR RESUME PDF IN THE PUBLIC FOLDER
        download="Priyanshu_Jain_Resume.pdf"
        className="download-button"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeDownload;