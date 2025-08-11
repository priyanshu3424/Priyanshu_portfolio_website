import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const socialIconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 10 } },
  hover: {
    scale: 1.25,
    y: -15,
    textShadow: "0px 0px 15px rgba(0,196,255,0.7)",
    transition: { type: "spring", stiffness: 400, damping: 20 }
  }
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SocialLinks = () => {
  const socialMedia = [
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/priyanshu_ja1n" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/Priyans71030611" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/priyanshu-jain-434083256" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/priyanshu3424" },
    { name: "Email", icon: <MdEmail />, link: "mailto:jainpriyanshu20@gmail.com" },
    { name: "Phone", icon: <MdPhone />, link: "tel:+919529946401" },
  ];

  return (
    <motion.section
      id="social"
      className="social-links-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={socialContainerVariants}
    >
      <h2>Find Me Online</h2>
      <div className="social-icons">
        {socialMedia.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform.name}
            variants={socialIconVariants}
            whileHover="hover"
          >
            {platform.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default SocialLinks;