import React from 'react';
import faceT from '../../../images/jerins-parlour-main/Image_Icon/Icon/Group 1373.png';
import hairC from '../../../images/jerins-parlour-main/Image_Icon/Icon/Group 1372.png';
import skinT from '../../../images/jerins-parlour-main/Image_Icon/Icon/Group 1374.png';

const Services = () => {


 return (
  <div>
   <h2 className='text-2xl font-bold text-center my-16 text-black'>Our Awesome <span className='text-pink-700'>Services</span></h2>

   <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
    {/* //////////////////////////////////////// */}
    <div class="card mt-2 bg-white text-black shadow-3xl">
     <div class="card-body items-center text-center">
      <img style={{ heigt: "72px", width: "72px" }} src={faceT} alt="face imag" />


      <h2 class="card-title">Anti Age Face Treatment </h2>
      <p class="text-pink-700 font-bold"> $199</p>
      <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product</p>

     </div>
    </div>


    {/* /////////////////////////////////////////////////////////////////// */}
    <div class="card mt-2 bg-white text-black shadow-2xl">
     <div class="card-body items-center text-center">
      <img style={{ heigt: "72px", width: "72px" }} src={hairC} alt="hair imag" />

      <h2 class="card-title">Hair Color & Styleing</h2>
      <p class="text-pink-700 font-bold"> $99</p>
      <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
      <div class="card-actions">

      </div>
     </div>
    </div>
    {/* ////////////////////////////////////////////////////////// */}

    <div class="card  mt-2 bg-white text-black shadow-3xl">
     <div class="card-body items-center text-center">
      <img style={{ heigt: "72px", width: "72px" }} src={skinT} alt="skin imag" />


      <h2 class="card-title">Skin Care Treatment</h2>
      <p class="text-pink-700 font-bold"> $299</p>
      <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
      <div class="card-actions">

      </div>
     </div>
    </div>
   </div>


   <div className='flex justify-center items-center my-10'>
    <button class="btn bg-pink-700 text-white hover:bg-pink-700">Exlpore more</button>
   </div>
  </div>


 );
};

export default Services;