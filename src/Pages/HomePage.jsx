import React, { useEffect } from "react";
import Whyus from "../components/Whyus";
import YTvideos from "../components/YTvideos";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";
import Home from "../components/Home";
import Nav from "../components/Nav";

const HomePage = () => {
  useEffect(() => {
    intoview();
  }, []);

  function intoview() {
    const section = document.getElementsByTagName("section");

    let i = 1;
    document.addEventListener("scroll", scrollonfade);

    function scrollonfade() {
      var clientHeight = document.documentElement.clientHeight;
      var sectionY = section[i].getBoundingClientRect().y;
      var statsSectionHeight = section[i].getBoundingClientRect().height;

      if (clientHeight > sectionY + statsSectionHeight * 0.1) {
        section[i].style.animation = "fade";
        section[i].style.animationDuration = "1.5s";
        section[i].style.visibility = "visible";
        if (i == 6) {
          document.removeEventListener("scroll", scrollonfade);
          return;
        }
        i++;
      }
    }
  }

  return (
    <>
      <Nav />
      <Home />
      <Aboutus />
      <YTvideos />
      <Whyus />
      <Statistics />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default HomePage;
