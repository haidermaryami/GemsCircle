import React from 'react'
import "./birth.css"
import frame from "../assets/Frame.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import frame6 from "../assets/frame6.png";



// const Cards =[
//   {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   },
//   {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   }, {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   }, {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   }, {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   }, {
//     title:"Red Garnet - January",
//     desc:"Certainly! Here are birthstones for each month along with a brief",
//     img:`${frame}`,
  
//   },
// ]






const Birth = () => {
  return (
    <div className='birth'>
<div className='birth-content'>
<h1>Birth Gemstones</h1>
<p>Certainly! Here are birthstones for each month along with a brief.</p>



</div>


<div className='CardsContainer'>

  
      <div className='  Cards'>
   <img className='card-img' src={frame} alt=''/>
  
   <h1 className='cardtitle'>Red Garnet - January</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>

   
   <div className='  Cards'>
   <img className='card-img' src={frame2} alt=''/>
  
   <h1 className='cardtitle'>Amethy - february</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>

   
   <div className='  Cards'>
   <img className='card-img' src={frame3} alt=''/>
  
   <h1 className='cardtitle'>Peridot - august</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>
   
   <div className='  Cards'>
   <img className='card-img' src={frame4} alt=''/>
  
   <h1 className='cardtitle'>Topaz - December</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>
   
   <div className='  Cards'>
   <img className='card-img' src={frame5} alt=''/>
  
   <h1 className='cardtitle'>TTurquoise -December</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>
   
   <div className='  Cards'>
   <img className='card-img' src={frame6} alt=''/>
  
   <h1 className='cardtitle'>Ruby - July</h1>
   <p className='carddesc'>garnet is an entire group of minerals that vary in their
   chemical composition, resulting in a variety of…
  
   </p>
  
  
   </div>


</div>
    </div>
  )
}

export default Birth;
