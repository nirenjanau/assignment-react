import React from 'react'
import { Link } from "react-router-dom"

import MenuIcon from '../assets/categories-icon.png'
import Logo1 from '../assets/logo-icon.png'
import Cart from '../assets/cart-icon.png'
import User from '../assets/user-icon.png'

import  '../assets/style.css'

export default function Navbar() {
  return (
    <nav>
      <div className='header'>
        <Link to="/product">
          <img className='icon' src={Logo1} alt="Logo" width="3%" />
        </Link>
        <Link to="/categories">
          <img className='icon' src={MenuIcon} alt="Menu" width="3%" />
        </Link>
        <Link to="/cart">
          <img className='icon' src={Cart} alt="Cart" width="3%" />
        </Link>
        <Link to="/user">
          <img className='icon' src={User} alt="User" width="3%" />
        </Link>
      </div>
    </nav>
  )
}