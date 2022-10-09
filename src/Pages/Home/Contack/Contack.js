import React from 'react';

const Contack = () => {
 return (

  < >
   <h3 className='text-center text-black text-3xl my-28'>Let us handle your
    project, professionally.</h3>


   <div className='flex justify-center gap-4'>

    <div>


     <div className='grid grid-cols-2 justify-items-center gap-2'>
      <input
       type="text"
       placeholder="Full Name"
       className="input text-black  bg-white  max-w-xs"
      />
      <input
       type="text"
       placeholder="Last Name"
       className="input text-black  bg-white max-w-xs"
      />
      <input
       type="email"
       placeholder="Your Email"
       className="input text-black  bg-white w-full max-w-xs"
      />
      <input
       type="number"
       placeholder="Phone number"
       className="input bg-white text-black w-full max-w-xs"
      />
     </div>







     <div>
      <textarea
       rows={6}
       className="textarea text-black  bg-white w-full mt-3"
       placeholder="Your message">

      </textarea>
     </div>

     <button
      className="btn  bg-pink-700 text-white hover:bg-pink-700">
      Send Messagee
     </button>
    </div>







   </div>


  </>

 );
};

export default Contack;