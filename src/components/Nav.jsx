import Navlinks from "./ui/NavLinks";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  document.addEventListener("scroll", stickynavbar);

  function stickynavbar() {
    var navbar = document.getElementById("navbar");

    if (navbar == undefined) {
      document.removeEventListener("scroll", stickynavbar);
      return;
    }
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function phonenavigation__open() {
    document.body.classList += " menu--open";
  }

  function phonenavigation__close() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav id="navbar">
      <div className="nav__logo flex-row">
        <img className="logo__img" src={logo}></img>

        <div>
          <h1>A- Academy</h1>
          <p>Online Education</p>
        </div>
      </div>

      <div className="nav__links flex-row">
        <FontAwesomeIcon
          icon="bars"
          className="phone__nav--icon"
          onClick={() => phonenavigation__open()}
        />

        <Link to="/videos">
          <p className="link gold">Videos</p>
        </Link>

        <a href="#Home__anchor">
          <Navlinks name="Home" />
        </a>
        <a href="#Aboutus__anchor">
          <Navlinks name="About Us" />
        </a>
        <a href="#Whyus__anchor">
          <Navlinks name="Why us?" />
        </a>
        <a href="#Testimonials__anchor">
          <Navlinks name="Testimonials" />
        </a>
        <a href="#contact">
          <Navlinks name="Contact & Support" />
        </a>
      </div>

      <div className="menu__backdrop">
        <button
          className="btn__menu btn__menu--close"
          onClick={() => phonenavigation__close()}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          
          <Link to="/videos" >
            <p className="gold menu__link" onClick={() => phonenavigation__close()}>Videos</p>
          </Link>
          <a href="#Home__anchor" className="menu__link" onClick={() => phonenavigation__close()}>
            Home
          </a>
          <a href="#Aboutus__anchor" className="menu__link" onClick={() => phonenavigation__close()}>
            About us
          </a>
          <a href="#Whyus__anchor" className="menu__link" onClick={() => phonenavigation__close()}>
            Why Us
          </a>
          <a href="#Testimonials__anchor" className="menu__link" onClick={() => phonenavigation__close()}>
            Testimonials
          </a>
          <a href="#contact" className="menu__link" onClick={() => phonenavigation__close()}> 
          Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
