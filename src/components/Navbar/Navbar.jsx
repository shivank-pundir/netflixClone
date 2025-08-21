import React, {useEffect, useRef, useState } from 'react';
import "./navbar.css";
import logo from "../../assests/logo.png";
import search_icon from "../../assests/search_icon.svg";
import bell_icon from "../../assests/bell_icon.svg";
import profile_img from "../../assests/profile_img.png";
import Drop from "../../assests/drop.svg";
import { logout } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        <i className="search ri-search-line"></i>
        <p>Children</p>
        <i className="notification ri-notification-line"></i>
        
        {isAuthenticated ? (
          <div
            className='navbar-profile'
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen((v) => !v)}
          >
            <img src={profile_img} alt="Profile" className='profile' />
            <i className="ri-expand-up-down-line"></i>
            <div className="dropdown" style={{ display: open ? 'flex' : 'none' }}>
              <p onClick={() => logout()}>Sign out of Netflix</p>
            </div>
          </div>
        ) : (
          <div className='navbar-auth'>
            <button 
              className="login-btn-nav"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
