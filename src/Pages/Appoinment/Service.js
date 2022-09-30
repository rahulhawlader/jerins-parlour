import React from 'react';

const Service = ({ service, setTreatment }) => {
 const { name, slots, price } = service;
 return (
  <div>
   <div class="card w-96 shadow-xl">
    <div class="card-body text-center">
     <h2 className="text-xl font-bold text-secondary" > {name}</h2 >
     <p className='text-black'><small>Price: ${price}</small></p>
     <p className='text-black'>{
      slots.length > 0
       ? <span>{slots[0]}</span>
       : <span className='text-red-500'> try another Date</span>
     } </p>

     <p className='text-black'>{slots.length} space Available</p>




     <div className='card-actions justify-center'>
      <label
       htmlFor='booking-modal'

       disabled={slots.length === 0}
       onClick={() => setTreatment(service)}
       className="btn btn-sm btn-secondary text-white appercase">Booking Appointment</label>
     </div>




    </div>
   </div>
  </div>

 );
};

export default Service;