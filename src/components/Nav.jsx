import React, { useState, Component} from 'react';
import Navlinks from './ui/NavLinks';
import logo from "../assets/logo.jpeg";


const Nav = () => {

    //   componentDidMount() {
    //    var header = document.getElementById("sticky");
    //    console.log(header.offsetTop)   
    //   }

    return (
        <nav id='sticky'>
            <div className='nav__logo flex-row'>
                <img className="logo__img" src={logo}>

                </img>

                <div>
                    <h1>A- Academy</h1>
                    <p>Online Education</p>
                </div>
            </div>

            <div className='nav__links flex-row'>
             <Navlinks name = "Home" />
             <Navlinks name = "About Us" />
             <Navlinks name = "Why us?" />
             <Navlinks name = "Statistics" />
             <Navlinks name = "Testimonials" />
             <Navlinks name = "Contact & Support" />
            </div>
        </nav>
    );
}

export default Nav;
