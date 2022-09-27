import React from 'react';

const Reviews = ({ review }) => {
 const { name, img, job, reviews } = review;
 return (
  <div className="card lg:max-w-lg bg-white shadow-xl">
   <div className="card-body">

    <div className="flex items-center">
     <div className="avatar">
      <div className="w-16 rounded-full  ring-offset-base-100 mr-5">
       <img src={img} alt="" />
      </div>
     </div>
     <div>
      <h4 className='font-bold text-black'>{name}</h4>
      <p className='text-black fond-bold'>{job}</p>
     </div>
    </div>

    <p className='text-gray-600'>{reviews}</p>

    <div class="rating gap-4">
     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    </div>

   </div>
  </div>
 );
};

export default Reviews;