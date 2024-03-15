import React from 'react';

import heroimg from"../assets/Gems stone website.png";
const Hero = () => {
  return (
    <div className='hero'>
 
    <img src={heroimg} alt='heroimg'/>

    <div className='hero-content'>

     <h1 className='hero-title'>Discover the World of  Gemstones</h1>
     <p className='hero-desc'>Unveiling Earth's Treasures: Explore the Radiance of Gemstones - Your Ultimate Guide to the World of Precious and Semi-Precious Gems</p>
     <button className='hero-button'>Get Started   
     </button>
     </div>

     

    </div>
  )
}

export default Hero
