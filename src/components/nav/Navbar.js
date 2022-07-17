import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <header>
    <div>
        <img src={logo} alt='logo' />
    </div>
    <ul>
        <li> <a href='/home'>HOME</a></li>
        <li><a href='/exercise'>EXERCISES</a> </li>
    </ul>

    </header>
  )
}

export default Navbar