import React from 'react';
import './homepage.css'
import Navbar from '../components/navbar/navbar';
import Main from '../components/main/main';

const Homepage = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default Homepage