import React from 'react'
import "./hero.css";
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <>
    <Navbar/> 
    <div className='hero'>
        <div className='hero-wrap'>
            <label htmlFor="username">Username</label>
            <input type="text"  id='username' placeholder='Username'/>
            <label htmlFor="password" className='labalPass'>Password</label>
            <input type="text" id="password"  placeholder='Password'/>
            <button>Login</button>
        </div>
    </div>
    </>

  )
}

export default Hero