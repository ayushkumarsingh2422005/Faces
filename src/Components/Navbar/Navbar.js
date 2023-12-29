import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='NevBarTop'>
        <div>
          FACES
        </div>
        <div>
          <Link to='/Home'>Home</Link>
          <Link to='/Participate'>Participate</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/About'>About</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
