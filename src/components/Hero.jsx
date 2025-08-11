import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content-wrapper">
        <motion.div
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
        >
          <img src="/images/profile1.jpg" alt="Priyanshu Jain" />
        </motion.div>
        <div className="hero-text-content">
          <motion.h2
            className="hero-name"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Priyanshu Jain
          </motion.h2>
          <motion.p
            className="hero-profession"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Software Developer
          </motion.p>
          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Hi, I'm Priyanshu Jain, from Kekri, Rajasthan. You could say I'm an Engineer by title, but deep down, I'm a Traveler and an Adventurer at heart! I love radiating good vibes, striking up conversations, and making sure there's a smile going around. When I'm not diving into the world of code, my mind is usually miles away, plotting my next big journey. I truly believe in exploring every incredible corner of this world and doing something genuinely impactful with my life.
          </motion.p>

          <motion.div
            className="education-details"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3>Education</h3>
            <p>
              <span className="education-degree">B.Tech in Information Technology (IT)</span>
              <br />
              <span className="education-institute">JECRC College, Jaipur, Rajasthan</span>
              <br />
              <span className="education-gpa">Graduated: 2025</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;