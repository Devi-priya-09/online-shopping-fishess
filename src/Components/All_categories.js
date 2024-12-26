import React from 'react';
// import './Sunday.css';
import fish2 from './images/fish2.jpg';
import fish3 from './images/fish3.jpg';
import fish4 from './images/fish4.jpg';
import tank2 from './images/tank2.webp';
import tankne from './images/tankne.webp';
import tank4 from './images/tank4.jpg';
function All_categories() {
  return (
    <div className="all_categories">
       <h3 style={{ color:'orangered', fontSize:'50px' }}>FISH FOODS</h3>
      <div className="image-container">
        <div>
           <img src={fish2} alt="Mar1" style={{ width: '300px', height: '350px' }}  />
           <h3>Blood Ware</h3>
            <h4>$300</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={fish3} alt="Mar3" style={{ width: '300px', height: '350px' }}  />
            <h3>Spiruluina</h3>
            <h4>$280</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={fish4} alt="Mar3"style={{ width: '300px', height: '350px' }}  />
            <h3>Guppy Flake</h3>
            <h4>$180</h4>
           <button >ORDER NOW</button>
         </div>
        </div>

        <h3 style={{ color:'orangered', fontSize:'50px' }}>FISH TANK</h3> 
      <div className="image-container">
        <div>
           <img src={tank2} alt="Mar1" style={{ width: '300px', height: '350px' }}  />
           <h3>3.3FEET Imported tank </h3>
            <h4>$18,000</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={tankne} alt="Mar3" style={{ width: '300px', height: '350px' }}  />
            <h3>15inch Wall Bowl</h3>
            <h4>$780</h4>
           <button >ORDER NOW</button>
         </div>
         <div>
            <img src={tank4} alt="Mar3"style={{ width: '300px', height: '350px' }}  />
            <h3>1.3 FEET Imported</h3>
            <h4>$480</h4>
           <button >ORDER NOW</button>
         </div>
        </div>
    </div>
  );
}

export default All_categories;
