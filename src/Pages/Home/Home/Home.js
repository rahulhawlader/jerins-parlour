import React from 'react';

import BennerOne from '../Benner/BennerOne';
import BennerTwo from '../Benner/BennerTwo';
import Contack from '../Contack/Contack';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
 return (
  <div>
   <BennerOne />
   <Services />
   <BennerTwo />
   <Testmonials />
   <Contack />
   
  </div>
 );
};

export default Home;