import React from "react";
import Homesvg from "../assets/home.svg"

const Home = () => {
  return (
    <section id="Home">
      <img src={Homesvg} className="homesvg" />
      <div className="home__text--wrapper">
        <h1 className="home__header">A- Academy</h1>

        <h3 className="home__subheader">Teaching One Video At A Time</h3>

        <p className="home__paragraph">Welcome to A-Dash (A-) Academy. We focus on a range of topics in Chemistry, Physics, Mathematics and Science Extension. Practise makes Perfect! We are a young organisation starting out so we need your help! Hit that subscribe button. Continue watching our videos. Witness us grow and help many more people around the globe - free of charge.</p>

       <button className="cssbuttons-io-button">
          Explore Our Channel!
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div> 
      
    </section>
  );
};

export default Home;
