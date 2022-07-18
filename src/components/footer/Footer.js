import React from "react";
import "./footer.css"
import logo from "../../assets/logo.svg";
import github from "../../assets/github-logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <p>
       From zero to hero  &copy; 2022
      </p>
      <div>
       <a href="https://github.com/AyoubAce/getFIT-workout-app">
       <p>Ayoub Khribich</p>
       <img
      
          src={github}
          alt="github"
        /></a> 
      </div>
    </footer>
  );
};

export default Footer;
