import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import All_categories from './Components/All_categories';
import Aquriam  from './Components/Aquriam';
import About from './Components/About.js';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';

import mar1 from './Components/images/mar1.jpg';
import mar2 from './Components/images/mar2.png';
import mar3 from './Components/images/mar3.png';
import koifish from './Components/images/koifish.jpg';
import korowana from './Components/images/korowana.jpg';
import mono from './Components/images/mono.jpg';
import gold from './Components/images/gold.webp';
import green from './Components/images/green.webp';
import pink from './Components/images/pink.webp';
import pra from './Components/images/pra.jpg';
import final1 from './Components/images/final1.png';
import './App.css';

function App() {
  return (
    <div>

      <div className="header">
        <h1>BUBBLES</h1>
      </div>
      <Router>
        <nav>
          <a href="/">Home</a>
          <a href="/all_categories">All Categories</a>
          <a href="/aquriam">Aquriam</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_categories" element={<All_categories />} />
          <Route path="/aquriam" element={<Aquriam />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
       
        </Routes>
      </Router>
      <div>
      
      <img src={mar1} alt="Mar1" style={{ width: '1300px', height: '350px' }} />
      </div>
       <div className="image-container">
        <div>
           <img src={mar2} alt="Mar1"  />
         </div>
         <div>
            <img src={mar3} alt="Mar3"  />
         </div>
        </div>
        <div className="image-container">
        <div>
           <img src={koifish} alt="Mar1"  />
         </div>
         <div>
            <img src={korowana} alt="Mar3"  />
         </div>
         <div>
            <img src={mono} alt="Mar3"  />
         </div>
        </div>

    <h3 style={{ color:'orangered', fontSize:'70px' }}>BEST SALEING</h3>
    <div>
   

 
    <div className="image-containerr">
      <div>
        <img src={gold} alt="Gold" />
      </div>
      <div >
        <img src={pink} alt="Pink" />
      </div>
      <div >
        <img src={green} alt="Green" />
      </div>
      <div >
        <img src={pra} alt="Pra"style={{ width: '300px', height: '280px' }} />
      </div>
    </div>
 
      
  </div>
  <div>
      
      <img src={final1} alt="Mar1" style={{ width: '1100px', height: '350px' }} />
  </div>

  <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide the best services and products for our customers. Quality and satisfaction guaranteed.
          </p>
          <p>
          From premium fish food to the latest aquarium accessories, our goal is to deliver 
        products and knowledge that enhance your fish-keeping experience. 
          </p>
        </div>
        <div className="footer-section">
          <h3>REFERENCES</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#all_categories">All_categories</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="login">login</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: bubblesexample.com</p>
          <p>Phone: +987065454</p>
          <p>Address: 123 Main Street, dindigul</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 fish Company. All rights reserved.</p>
      </div>
    </footer>



   
   
    </div>
  );
}

export default App;
