import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><div>Home</div></Link>
        <Link to="/"><div><input className='search' type="text" placeholder='Enter Food Recipe...'/><button className='search-button'><FaSearch /></button></div></Link>
        {
          JSON.parse(localStorage.getItem("email"))
          ? <div>Logout</div>
          : <Link to="/signup"><div>Account</div></Link>
        }
        
        
        <Link to="/add"><div>Add Recipe</div></Link>
        <Link to="/"><div></div></Link>
    </div>
  )
}

export default Navbar