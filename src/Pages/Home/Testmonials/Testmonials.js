import React from 'react';
import people1 from '../../../images/jerins-parlour-main/Image_Icon/Image/Ellipse 90.png';
import people2 from '../../../images/jerins-parlour-main/Image_Icon/Image/Ellipse 91.png';
import people3 from '../../../images/jerins-parlour-main/Image_Icon/Image/Ellipse 92.png';
import Reviews from './Reviews';

const Testmonials = () => {

 const reviews = [
  {
   _id: 1,
   name: 'Nash Patrik',
   reviews: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
   job: 'CEO, Manpol',
   img: people1
  },
  {
   _id: 2,
   name: 'Miriam Barron',
   reviews: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
   job: 'CEO, Manpol',
   img: people2
  },
  {
   _id: 3,
   name: 'Bria Malone',
   reviews: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
   job: 'CEO, Manpol',
   img: people3
  },
 ];


 return (
  <div>
   <h1 className='text-3xl mb-16 text-center text-black font-bold'>Testmonials</h1>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


    {
     reviews.map(review => <Reviews

      key={review._id}
      review={review}

     ></Reviews>)
    }
   </div>

  </div>
 );
};

export default Testmonials;