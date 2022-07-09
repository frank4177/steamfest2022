import React from 'react'
import './navbar.css';
import Homepage_logo from '../../asset/Homepage_logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <img src={Homepage_logo} alt="" />
      </div>
      <hr className='hr' />
    </div>
  )
}

export default Navbar