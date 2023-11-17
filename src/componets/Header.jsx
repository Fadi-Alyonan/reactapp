import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuBars from './MenuBars'
import logo from '../assets/images/Logo-head.svg'

const Header = () => {
    const [menuOpen, setMenuOpen]= useState(false)
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (menuOpen) {
            const header = document.getElementById('header')
            if (!header.contains(event.target)) {
              setMenuOpen(false);
            }
          }
        };
    
        document.addEventListener('click', handleOutsideClick)
    
        return () => {
          document.removeEventListener('click', handleOutsideClick)
        };
      }, [menuOpen]);

  return (
<>
    {menuOpen ? (<MenuBars/>) : (<></>)}
    <header id='header'>
        <div className="container">
            <Link to="/"><img  className="logo" src={logo} alt="crito logotype" /></Link>
            <button className="menu-bars" onClick={()=> setMenuOpen(!menuOpen)}>
                {menuOpen ? (<i className="fa-brands fa-xing" style={{ color: '#ffffff' }}></i>) : (<i className="fa-regular fa-bars-progress"></i>)}
                
            </button>
        
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-light fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-light fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-light fa-location-dot"></i> 
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <nav>
                            <NavLink to="/" target="_blank"><i className="fa-brands fa-facebook"></i></NavLink>
                            <NavLink to="/" target="_blank"><i className="fa-brands fa-twitter"></i></NavLink>
                            <NavLink to="/" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink>
                            <NavLink to="/" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink>
                        </nav>
                    </div>
                </div>

                <div className="main-menu">
                    <nav>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/service">Service</NavLink> 
                        <NavLink to="/news">News</NavLink> 
                        <NavLink to="/contacts">Contact</NavLink>
                    </nav>
                    <Link className="btn-yellow" to="login.html">Login<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
        </div>
    </header>
</>
  )
}

export default Header