import React, {useEffect, useRef } from 'react';
import "./navbar.css";
import logo from "../../assests/logo.png";
import search_icon from "../../assests/search_icon.svg";
import bell_icon from "../../assests/bell_icon.svg";
import profile_img from "../../assests/profile_img.png";
import Drop from "../../assests/drop.svg";
import { logout } from '../../firebase';

const Navbar = () => {

  const navRef = useRef();

  useEffect(() =>{
     window.addEventListener('scroll', () => {
        if(window.scrollY >= 80){
          navRef.current.classList.add('nav-dark')
        }else
        {
           navRef.current.classList.remove('nav-dark')
        }
     })
  },[])
  return (
    <div className='navbar' ref={navRef}>
      <div className='navbar-left'>
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className='navbar-right'>
        {/* <img src={search_icon} alt="Search" className='icons' /> */}
        <i class="search ri-search-line"></i>
        <p>Children</p>
        {/* <img src={bell_icon} alt="Notifications" className='icons' /> */}
        <i class="notification ri-notification-line"></i>
        <div className='navbar-profile '>
          <img src={profile_img} alt="Profile" className='profile' />
         <i class="ri-expand-up-down-line"></i>

         <div className="dropdown">
          <p onClick={() => {logout()}}>Sign out of Netflix</p>
         </div>
        </div>
       
      </div>

       
    </div>
  );
};

export default Navbar;
