import React from 'react';
// Import all the social media icons you want to use from react-icons/fa
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>

      <div className="contact-info">
        {/* Your primary email */}
        <p className="contact-detail-large">
          <FaEnvelope /> <a href="mailto:jainpriyanshu20@gmail.com">jainpriyanshu20@gmail.com</a>
        </p>
        {/* Your phone number */}
        <p className="contact-detail-large">
          <FaPhone /> <a href="tel:+919529946401">+91 9529946401</a>
        </p>
        {/* If you want to include your second email, uncomment this: */}
        {/* <p className="contact-detail-large">
          <FaEnvelope /> <a href="mailto:priyanshujain.it25@gmail.com">priyanshujain.it25@gmail.com</a>
        </p> */}
      </div>

      <div className="social-links-container">
        {/* LinkedIn link */}
        <a href="https://www.linkedin.com/in/priyanshu-jain-434083256" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaLinkedin />
        </a>
        {/* GitHub profile */}
        <a href="https://github.com/priyanshu3424" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaGithub />
        </a>
        {/* Twitter link */}
        <a href="https://x.com/Priyans71030611" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaTwitter />
        </a>
        {/* Instagram link */}
        <a href="https://www.instagram.com/priyanshu_ja1n/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaInstagram />
        </a>
      </div>

      {/* Existing Contact Form (if applicable) */}
      <form>
        <h3>Send Me a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;