// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import Logo from '../../../../public/logo R.png'

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>efa</span>
      </div>
      <div className="right">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Galeri</li>
          <li>Kontak</li>
        </ul>

        <input type="text" className="search" placeholder="Search" />
      </div>
    </div>
  )
}

export default Header