import React from 'react';
import Whyus from "../components/Whyus";
import YTvideos from "../components/YTvideos";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";
import Home from "../components/Home"
import Nav from '../components/Nav';



const HomePage = () => {
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
}

export default HomePage;

