import images from '../../images/jerins-parlour-main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBennar = ({ date, setDate }) => {


 return (
  <div>
   <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={images} className="max-w-sm w-2/4 rounded-lg shadow-2xl" alt='' />
     <div className='text-black'>
      <DayPicker
       mode="single"
       selected={date}
       onSelect={setDate}


      />

     </div>
    </div>
   </div>
  </div>
 );
};

export default AppoinmentBennar;