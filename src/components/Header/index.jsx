import React from 'react';
import './Header.css';
import { FaCode } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { darkMode } = useTheme();

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <FaCode /> My Portfolio
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;