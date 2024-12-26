import React from 'react';
import './About.css';
import tankne from './images/tankne.webp';
// import pra from './Components/images/pra.jpg';
// import final1 from './Components/images/final1.png';

// import Navbar from './Navbar.js';

function About() {
  return (
    <div>


          <div className="about">
          <header className="header">
        <h1 className="header-title">About Us</h1>
        <p className="header-subtitle">
          Discover our story, our values, and our mission.
        </p>
      </header>

      <div className="container">
        <div className="row">
          <div className="image-section">
            <div className="responsive-image" >
            <img src={tankne} alt="Mar1"  style={{ width: '400px', height: '300px'   }} />
            </div>
          </div>
          <div className="text-section">
            <h2>Who We Are</h2>
            <p>
              We are a passionate team dedicated to providing the best fish
              and services to our customers. Our journey began with a simple
              idea: to make quality accessible to everyone.
            </p>
            <p>
            From premium fish food to the latest aquarium accessories, our goal is to deliver 
        products and knowledge that enhance your fish-keeping experience. We believe in 
        sustainability and partner with suppliers who share our values for eco-friendly 
        and cruelty-free practices.
            </p>
          </div>
        </div>
      </div>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To inspire and empower individuals by offering unparalleled products
          and experiences.
        </p>
      </section>

      <div className="values-container">
        <div className="value-card">
          <h3>Integrity</h3>
          <p>We uphold the highest standards of integrity in everything we do.</p>
        </div>
        <div className="value-card">
          <h3>Innovation</h3>
          <p>We embrace change and are constantly driven to innovate.</p>
        </div>
        <div className="value-card">
          <h3>Excellence</h3>
          <p>We are committed to delivering excellence in all that we do.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
          