import Navlinks from "./ui/NavLinks";
import logo from "../assets/logo.jpeg";
import { Link } from 'react-router-dom'


const Nav = () => {
  document.addEventListener("scroll", stickynavbar);

  function stickynavbar() {
 
    var navbar = document.getElementById("navbar");
   

   if(navbar == undefined){
    document.removeEventListener("scroll", stickynavbar);
    return
   }
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
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
        <Link to="/videos"><p className="link gold">Videos</p></Link>

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
    </nav>
  );
};

export default Nav;
