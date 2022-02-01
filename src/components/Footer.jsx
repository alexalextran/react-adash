import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/logo.jpeg";
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer> 
       <a href="https://icons8.com/photos" alt="stockphoto" className='stockphotolink'>Photo by Icons8</a>
      <p className="footer__text">Owned By Aadarsh Anuj</p>

      <div className="nav__logo flex-row">
        <img className="logo__img" src={logo} />
        <div>
          <h1>A- Academy</h1>
          <p>Online Education</p>
        </div>
       
      </div>
        <div className="footer__socials flex-row">
         <a href="https://www.linkedin.com/in/aadarsh-anuj-998a16212/"> <FontAwesomeIcon icon={faLinkedin} style={{color: "rgb(0,119,181)", fontSize: "22px"}}/> <p>LinkedIn</p></a>
         <a href="https://www.facebook.com/aadarsh.anuj.73"> <FontAwesomeIcon icon={faFacebookSquare} style={{color: "rgb(72,103,170)" , fontSize: "22px"}}/> <p>Facebook</p></a>
        </div>
    </footer>
  );
};

export default Footer;
