import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_container'>
          <p><a href="home">Home</a></p>
          <p><a href="intro">Introduction</a></p>
          <p><a href="projects">Projects</a></p>
          <p><a href="resume">Resume</a></p>
        </div>
      </div>
      <div className='navbar-menu'></div>
    </div>
  )
}

export default Navbar
