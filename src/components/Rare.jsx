import React from 'react';
// import imag1 from '../assets/img 1';
import imge9 from '../assets/pic1.svg';
import img9 from "../assets/gems.png";



import"./rare.css";

const Rare = () => {
  return (
    <div className='rare'>
<h1 className='title' style={{color:"#000",textAlign:"center"}}>Gemstones</h1>
<div className='rareContent'>

<div className='leftside'>
<h1>The Most Rarest Gemstones <img src={imge9} alt='ig1'/> </h1>

<p>"Embark on a journey through the rarest treasures of the Earth with our collection of the most elusive gemstones. Each one is a marvel of nature, boasting exquisite colors, exceptional clarity, and a scarcity that adds to its allure. Discover the mystique of these precious stones, from the mesmerizing blue hues of benitoite to the enchanting pink of musgravite. Our curated selection showcases nature's masterpieces, captivating collectors and enthusiasts alike with the extraordinary beauty found only in the world's most elusive gemstones.</p>

<button>See all</button>


</div>



<div className='rightside'>
<img  src={img9}/>


</div>

</div>



</div>
      
    
  )
}

export default Rare
