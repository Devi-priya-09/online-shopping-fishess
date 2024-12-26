import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import All_categories from './All categories ';
import About from './About';
import Contact from './Contact';
import Login from './Login ';
import Register from './Register ';
import './App.css';

function Navbar() {
  return (
    <div>


    <Router>
      <nav>
        <a href="/">Home</a>
        <a href="/all_categories">All_categories</a>
        <a href="/about ">About </a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/order_now">Order_now</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_categories" element={<All_categories />} />
        <Route path="/about " element={<About  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about " element={<About  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register " element={<Register  />} />
      </Routes>
    </Router>

    <div className='order'>
      <h1>food items</h1>

    </div>

    
    </div>

  
  );
};

export default Navbar;
