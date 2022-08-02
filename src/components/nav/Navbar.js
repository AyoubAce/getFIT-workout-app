import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/"> home</Link>
        </li>
        <li>
          <Link to="/collection">
            <svg
              width="15"
              height="15"
              viewBox="0 0 139 131"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.5 1.01297L92.077 40.7922L92.1897 40.9908L92.4136 41.0357L137.479 50.0658L106.367 83.6749L106.211 83.8438L106.237 84.0724L111.515 129.428L69.7069 110.425L69.5 110.331L69.2931 110.425L27.4845 129.428L32.7628 84.0724L32.7894 83.8438L32.6331 83.6749L1.52132 50.0658L46.5864 41.0357L46.8103 40.9908L46.9231 40.7922L69.5 1.01297Z"
              />
            </svg>
            <p>collection</p>
          </Link>
        </li>
        {/* <li><a href='/exercise'>EXERCISES</a> </li> */}
      </ul>
    </header>
  );
};

export default Navbar;
