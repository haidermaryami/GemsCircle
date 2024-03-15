import React from 'react'
import background from"../assets/rectangle.png";
import ruby from "../assets/ruby1.png";
import "./Articles.css"
import pic from "../assets/image 232.png"
import pic1 from "../assets/image 233.png"
import { ChevronRight } from 'lucide-react';

const cards=[
  {
    title:"What Is Ruby - Gemstone Facts and Information",
    img:`${ruby}`,
    desc:"Ruby is probably the most iconic coloured gemstone in the world, and its name will forever be linked with its striking, definitive colour..."
  },
  {
    title:"What Is Emerald - Gemstone Facts and Information",
    img:`${pic}`,
    desc:"Emerald is simply one of the most desirable, famous and historical gemstones of all time. Part of the Beryl family of gemstones, which also includes Aquamarine and Morganite..."
  },
  {
    title:"Purple Gemstones: Rarity, Value, and Potential",
    img:`${pic1}`,
    desc:"Purple stones are a fascinating and diverse group that has captivated collectors and investors for centuries. They range from the affordable and popular amethyst..."
  },

]





const Articles = () => {
  return (
    <div className='article'>
      
<img src={background} alt='img'/>

<div className="gemContent">


<h1 className="title">Gemstones Articles</h1>
<p className="desc">Unveiling the World of Gemstones: In-depth Articles and Insights on the Beauty, History, and Mystique of Earth's Precious Treasures</p>

<div className="cardContainer">

{
    cards.map((item,ind)=>(
        <div className="card" key={ind}>
        <div>
            <img className='cardimg' src={item.img} alt="" />

        </div>


        <h2 className="cardtitle">{item.title}</h2>
        <p className="carddesc">{item.desc}</p>
        <button>Read more...</button>

    </div>
        
        
        ))
}

   

</div>
<button className='gembtn'>View all     
</button>

</div>



    </div>
  )
}

export default Articles
