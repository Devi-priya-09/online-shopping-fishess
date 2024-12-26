import React from 'react';
import './Register.css';
// import Navbar from './Navbar.js';

function Register() {
  return (
    <div>


          <div className="Register">
          <div class="container">
    <form class="register-form">
      <h2>Register</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>

        </div>


       




     </div>
  );
}

export default Register;





















