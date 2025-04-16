import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="social-links">
        <a href="https://github.com/Nilavan07" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https:linkedin.com/in/seranilavan-sivanesan-7b24a6244" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/_nilavan_s" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Seranilavan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;