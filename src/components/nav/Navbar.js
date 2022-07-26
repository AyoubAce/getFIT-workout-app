import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
    <div className='logo'>
        <Link to="/"><img src={logo} alt='logo' /></Link>
    </div>
    <ul>
        <li><Link to="/"> HOME</Link> </li>
        {/* <li><a href='/exercise'>EXERCISES</a> </li> */}
    </ul>

    </header>
  )
}

export default Navbar