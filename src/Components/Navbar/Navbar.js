import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navdiv'>
       <nav class="nav-bar">
      <div class="brand-name">Site Name</div>
      <div class="searchBar">
        <input type="text" placeholder="Search"/>
      </div>
      <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="nav-bar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
  </nav>
    </div>
  )
}

export default Navbar
