import React, { useEffect, useState } from 'react';

const useAppoinment = () => {
 const [services, setServices] = useState([]);


 useEffect(() => {
  fetch('Services.json')
   .then(res => res.json())
   .then(data => setServices())
 }, [])

 return [services, setServices]
};

export default useAppoinment;