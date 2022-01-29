import React from "react";
import Aboutuscards from "./ui/AboutUsCards";

const Aboutus = () => {
  return (
    <section id="Aboutus">
      <div className="aboutus__text">
          <h2 className="aboutus__title">About us?</h2>
          <p className="aboutus__title--sub">Everything that you need to know about <span className="red">A- Academy</span> wrapped up neatly</p>
      </div>

      <div className="aboutus__cards flex-row">
        <Aboutuscards
         icon="user-friends"
          title="Who are we?"
          summary="A- Academy is an organisation who looks to help all people from all walks of life in the disciplines of Science and Mathematics. We were found in 2021 by Aadarsh Anuj - a Science and Mathematics teacher."
        />
        <Aboutuscards
        icon="book-reader"
          title="What we do?"
          summary="We teach Science and Mathematics so that each individual has an opportunity to bring about positive change in their local communities and the world by applying what they learn in Chemistry, Physics or Mathematics."
        />

        <Aboutuscards
        icon="user-graduate"
          title="Our Mission"
          summary="A- Academy has the mission to inspire humanity to create a more positive future. We do this through providing education and motivation."
        />
      </div>
    </section>
  );
};

export default Aboutus;
