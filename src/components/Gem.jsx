import React, { useState } from 'react';
import image1 from "../assets/product (1).svg";
import image2 from "../assets/product (2).svg";
import image3 from "../assets/product (3).svg";
import image4 from "../assets/product (4).svg";
import image5 from "../assets/product (5).svg";
import image6 from "../assets/icon 1.svg";
import image7 from "../assets/icon 2.svg";



const cards =[
  {
    title:"Ruby",
    img:`${image3}`
  },
  {
    title:"Sapphire",
    img:`${image2}`
  },
  {
    title:"Emerald",
    img:`${image1}`
  },
  {
    title:"Pearl",
    img:`${image5}`
  },
  {
    title:"Alexandrite",
    img:`${image4}`
  },
];


const Gem = () => {


const [searchTerm,setSearchTerm] = useState('');

const [filteredCards, setFiltereCards] = useState (cards);

const handleSearch=(event)=>{
  setSearchTerm(event.target.value);

  const flitered=cards.filter(item=>item.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))

  setFiltereCards(flitered)
}



  return (
    <div className='topsearchgem'>
    <h1 className='title'>Gemstone Encyclopedia</h1>
      <div className='filterContainer'>
      <img className='leftsideimg' src= {image6} alt=''/>
      <input type='text' placeholder='Search for gems..' onChange={handleSearch} />
      <img className='rightsideimg' src={image7} alt=''/>
      </div>
<h2 className='subheading'> Top Searched gemstones </h2>

<div className='cardContianer '>
{
filteredCards.map((item,ind)=>(

<div className='card'>
<img src={item.img} alt=''/>

<h3 className='cardtitel'>{item.title}</h3>
</div>
  ))
}
</div>


    </div>
  )
}

export default Gem


 













    
