import React from 'react';
 import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1 className="animate-header">Contact Us</h1>
        <p className="animate-subheader">
          We're here to help! Reach out to us with your questions or feedback.
        </p>
      </header>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <div className="contact-info animate-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out by filling the form or using the contact
            details below:
          </p>
          <p>Email: fish@gmail.com</p>
          <p>Phone:9076548989</p>
          <p>Address: 2/433, Main Street, batlagundu, dindigul</p>
        </div>
        <form className="contact-form animate-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
