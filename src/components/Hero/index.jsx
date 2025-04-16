import React from 'react';
import './Hero.css';
import profileImage from '../../assets/images/profile.jpg';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="hero-text">
        <h1>Seranilavan Sivanesan</h1>
        <h2>Web Developer</h2>
      </div>
    </div>
  </section>
);

export default Hero;