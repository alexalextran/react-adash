import React from "react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer> 
    
      <p className="footer__text">Copyright A- Academy</p>

      <div className="nav__logo flex-row">
        <img className="logo__img" src={logo} />
        <div>
          <h1>A- Academy</h1>
          <p>Online Education</p>
        </div>
       
      </div>
        <div className="footer__socials flex-row">
         <p>LinkedIn</p>
         <p>Facebook</p>
        </div>
    </footer>
  );
};

export default Footer;
