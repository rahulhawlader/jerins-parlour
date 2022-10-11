import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L41anBQZYjn6cSxMdp5BdALVevV4wZo9Btuf6IhPfB7VawZNfAxgeqWt2FJtXX67dA2PKoWZB8nNa7VYeppexoT00MrTrs91h');


const Payment = () => {
 const { id } = useParams();

 const url = `http://localhost:5000/booking/${id}`;


 const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
  method: 'GET',
  headers: {
   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }

 }).then(res => res.json()))


 if (isLoading) {
  return <Loading />
 }

 return (
  <div className='flex h-screen  justify-center items-center'>

   <div>
    <div class="card w-50 max-w-md  shadow-2xl mx-8 my-12 bg-black">
     <div class="card-body">
      <p className='text-success text-bold'>Hello, {appointment.patientName}</p>
      <h2 class="card-title text-white">Please Pay for {appointment.treatment}</h2>
      <p className='text-white'>Your appointment <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
      <p className='text-white'>Please Pay: ${appointment.price}</p>

     </div>
    </div>
    <div class="card flex-shrink-0 w-50 mx-8  max-w-md shadow-2xl bg-black">
     <div class="card-body">

      <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment} />
     </Elements>

     </div>
    </div>




   </div>
  </div>
 );
};

export default Payment;