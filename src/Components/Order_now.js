import React from "react";
import "./Order_now.css"; // Link the custom CSS file

function Order_now() {
  return (
 <div className="order-now">
      

    <div class="order-container">
      <h1 class="order-title">Order Now</h1>
      <form class="order-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="product">Product</label>
          <select id="product" name="product" required>
            <option value="">Select a product</option>
            <option value="fish">Fish</option>
            <option value="fish-food">Fish Food</option>
            <option value="fish-tank">Fish Tank</option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="1" placeholder="Enter quantity" required />
        </div>
        <button type="submit" class="order-btn">Place Order</button>
      </form>
    </div>
   </div>
        
      
  );
}

export default Order_now;
