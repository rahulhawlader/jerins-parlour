import React from 'react';
import img from '../../../images/jerins-parlour-main/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const BennerTwo = () => {
 return (
  <div>
   <div className="hero min-h-screen bg-white">
    <div className="hero-content flex-col lg:flex-row">
     <img src={img} className="w-96 rounded-lg shadow-2xl" alt='' />
     <div >
      <h1 className="text-4xl text-black font-bold">Let us handle your screen <span className='text-pink-700'>Professionally </span>.</h1>
      <p className="py-6 text-black">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
      <div className='flex  gap-6 '>
       <div>
        <h1 className='text-4xl font-bold text-pink-700'>500+ </h1>
        <p className='text-black font-bold'>Happy Customer</p>

       </div>
       <div>
        <h1 className='text-4xl  font-bold text-pink-700'>16+ </h1>
        <p className='text-black font-bold'>Total Service</p>

       </div>

      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default BennerTwo;