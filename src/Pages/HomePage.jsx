import React from 'react';
import Whyus from "../components/Whyus";
import YTvideos from "../components/YTvideos";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Aboutus from "../components/Aboutus";
import Home from "../components/Home"



const HomePage = () => {
    return (
        <>
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

