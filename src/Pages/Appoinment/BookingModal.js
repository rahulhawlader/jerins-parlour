import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
 const { name, slots } = treatment;


 const handleBooking = event => {
  event.preventDefault();

  const slot = event.target.slot.value;
  const name = event.target.name.value;
  console.log(name, slot);

  setTreatment(null)

 }



 return (
  <div>
   <input type="checkbox" id="booking-modal" class="modal-toggle" />
   <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-white  ">
     <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <h3 class="font-bold text-lg text-secondary">Booking For:- {name}</h3>

     <form onSubmit={handleBooking} class="grid grid-cols-1  gap-3 justify-items-center mt-3 ">

      <input disabled type="text" value={format(date, 'PP')} class="input bg-white input-bordered w-full max-w-xs" />



      <select name="slot" className="select select-bordered w-full max-w-xs">
       {
        slots.map((slot, index) => <option
         key={index}
         value={slot}


        >{slot}</option>)
       }

      </select>



      <input type="text" name='name' placeholder="Your Name" class="input bg-white input-bordered w-full max-w-xs" />


      <input type="email" name='email' placeholder="Your Email" class="input bg-white input-bordered w-full max-w-xs" />
      <input type="number" name='number' placeholder="Your Number" class="input bg-white input-bordered w-full max-w-xs" />


      <input type="submit" value="submit" class="btn btn-success w-full max-w-xs" />





     </form>

    </div>
   </div>
  </div>
 );
};

export default BookingModal;