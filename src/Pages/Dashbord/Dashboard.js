import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import bookedImg from '../../images/jerins-parlour-main/Image_Icon/Icon/Group.png'
import reviewImg from '../../images/jerins-parlour-main/Image_Icon/Icon/Group 1368.png'
import usersImg from '../../images/jerins-parlour-main/Image_Icon/Icon/Group 1360.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';




const Dashboard = () => {
 const [user] = useAuthState(auth);
 const [admin] = useAdmin(user)

 return (
  <div class="drawer drawer-mobile">
   <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content ">
    <h2 className='text-3xl font-bold text-purple-500'>Welcome To Your DashBoard</h2>
    <Outlet />


   </div>
   <div class="drawer-side">
    <label for="dashbord-sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-48 text-black bg-white">
     {/* <!-- Sidebar content here --> */}
     <li><Link to="/dashboard"><img style={{ heght: "70px", width: "26px" }} src={bookedImg} alt=''></img> Booking List</Link></li>
     <li><Link to="/dashboard/myreview"><img style={{ heght: "70px", width: "26px" }} src={reviewImg} alt=''></img>  My Review</Link></li>

     {admin && <>
      <li><Link to="/dashboard/user"><img style={{ heght: "70px", width: "26px" }} src={usersImg} alt=''></img>  Make Admin</Link></li>

      <li><Link to="/dashboard/employee"><img style={{ heght: "70px", width: "26px" }} src={usersImg} alt=''></img> Add a Employee</Link></li>

      <li><Link to="/dashboard/manage"><img style={{ heght: "70px", width: "26px" }} src={usersImg} alt=''></img> Manage a Employee</Link></li>

     </>}




    </ul>

   </div>
  </div>
 );
};

export default Dashboard;