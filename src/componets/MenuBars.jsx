import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuBars = () => {
  return (
    <>
    <nav className='main-menu'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/service">Service</NavLink> 
      <NavLink to="/news">News</NavLink> 
      <NavLink to="/contacts">Contact</NavLink>
    </nav>
    </>
  )
}

export default MenuBars