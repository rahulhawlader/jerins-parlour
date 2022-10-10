import React, { useState } from 'react';
import AppoinmentBennar from './AppoinmentBennar';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
 const [date, setDate] = useState(new Date())
 return (
  <div >
   <AppoinmentBennar date={date} setDate={setDate} />
   <AvailableAppoinment date={date} />
  </div>
 );
};

export default Appoinment;