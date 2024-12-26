import React from 'react';
import './Aquriam.css';
// import Navbar from './Navbar.js';
import aynew from './images/aynew.webp';
import aynew1 from './images/aynew1.webp';
import aynew5 from './images/aynew5.jpg';
import au2 from './images/au2.webp';
import aq4 from './images/aq4.jpg';
import aq3 from './images/aq3.jpg';

function Aquriam() {
  return (
    <div>
         
         <div className="image-container">
        <div>
           <img src={aynew} alt="Mar1"  />
           <h3>Albino Red Toxedo</h3>
            <h4>$480</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={aynew1} alt="Mar3"  />
            <h3>Hb Red Rose</h3>
            <h4>$550</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={aynew5} alt="Mar3"  />
            <h3> Santa</h3>
            <h4>$420</h4>
           <button >ORDER NOW</button>
         </div>
        </div>
        <div className="image-container">
        <div>
           <img src={au2} alt="Mar1"  />
           <h3>Platinum</h3>
            <h4>$460</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={aq4} alt="Mar3"  />
            <h3>Red&white</h3>
            <h4>$480</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={aq3} alt="Mar3"  />
            <h3> Jewell</h3>
            <h4>$160</h4>
           <button >ORDER NOW</button>
         </div>
        </div>
    
    
    
    
    </div>


       





  );
}

export default Aquriam;






