import React, { useState}from "react";
import Homesvg from "../assets/home.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [ x, setx] = useState()
  const [ y, sety] = useState()
 
  

  function moveBackground(eventx, eventy) {
    const scaleFactor = 1 / 20;
    const shapes = document.querySelectorAll(".homeicon");
    setx((eventx)*scaleFactor)
    sety((eventy)*scaleFactor)

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      // Added rotate after tutorial
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg) rotate(${y * boolInt * 10}deg)`
    }
    
    }

  

 


  return (
    <section id="Home" onMouseMove={(event) => moveBackground(event.clientX, event.clientY)}>  
   
    <FontAwesomeIcon icon="superscript" className="homeicon homeicon1"/>
    <FontAwesomeIcon icon="flask" className="homeicon  homeicon2"/>
    <FontAwesomeIcon icon="microscope" className="homeicon  homeicon3"/>
    <FontAwesomeIcon icon="graduation-cap" className="homeicon  homeicon4"/>
    <FontAwesomeIcon icon="atom" className="homeicon  homeicon5"/>
    <FontAwesomeIcon icon="superscript" className="homeicon homeicon6"/>
    <FontAwesomeIcon icon="flask" className="homeicon  homeicon7"/>
    <FontAwesomeIcon icon="graduation-cap" className="homeicon  homeicon9"/>
    <FontAwesomeIcon icon="atom" className="homeicon homeicon13"/>
    <FontAwesomeIcon icon="superscript" className="homeicon  homeicon14"/>
    <FontAwesomeIcon icon="microscope" className="homeicon  homeicon11"/>
    <FontAwesomeIcon icon="graduation-cap" className="homeicon  homeicon12"/>
    <FontAwesomeIcon icon="microscope" className="homeicon  homeicon8"/>
    <FontAwesomeIcon icon="flask" className="homeicon  homeicon10"/>    
    <FontAwesomeIcon icon="microscope" className="homeicon  homeicon15"/>
    
    
     
    <img src={Homesvg} className="homesvg" alt="homepageillustration" />
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
