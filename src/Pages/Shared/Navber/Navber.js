import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/jerins-parlour-main/Image_Icon/Group 33092.png'

const Navber = () => {
 const menuItems = <>

  <li><Link to="/home">Home</Link></li>

  <li><Link to="/portfolio">Our Portfolio</Link></li>
  <li><Link to="/team">Our Team</Link></li>
  <li><Link to="/contack">Contack Us</Link></li>
  <li><Link to="/login">Login</Link></li>

 </>



 return (
  <div className="navbar text-black sticky lg:mx-auto bg-white top-0 z-50  w-auto">
   <div class="navbar">
    <div class="navbar-start">
     <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
       {
        menuItems
       }
      </ul>
     </div>
     <a class="btn btn-ghost normal-case text-xl">

      <img style={{ height: '48px', width: '128px' }} src={image} alt=''></img>

     </a>
    </div>
    <div class="navbar-center hidden lg:flex">
     <ul class="menu menu-horizontal p-0">
      {
       menuItems
      }
     </ul>
    </div>

   </div>
  </div>
 );
};

export default Navber;