import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../images/jerins-parlour-main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const BennerOne = () => {
 return (
  <div>
   <div class="hero min-h-screen bg-white">
    <div class="hero-content flex-col lg:flex-row-reverse">
     <img src={images} class="w-2/4 rounded-lg shadow-2xl" alt='benner pic' />
     <div className='w-2/4 '>
      <h1 class="text-4xl mr-2 text-black font-bold">BEAUTY SALON FOR EVERY <span className='text-pink-700'>WOMEN</span> </h1>
      <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi ratione aut, non atque blanditiis.</p>
      <button class="btn bg-pink-700 text-white hover:bg-pink-700"><Link to="/appoinment">Get an Apoinment</Link></button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default BennerOne;