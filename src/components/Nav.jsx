
import Navlinks from "./ui/NavLinks";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  window.onscroll = () => {
    stickynavbar();
  };

  

  function stickynavbar() {
    
    var navbar = document.getElementById("navbar");
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
        <Navlinks name="Home" />
        <Navlinks name="About Us" />
        <Navlinks name="Why us?" />
        <Navlinks name="Statistics" />
        <Navlinks name="Testimonials" />
        <Navlinks name="Contact & Support" />
      </div>
    </nav>
  );
};

export default Nav;
