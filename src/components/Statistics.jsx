import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [viewcount, setviewcount] = useState(0);
  const [subscribercount, setsubscribercount] = useState(0);
  console.log(viewcount);
  var loadonce = false; 
  let text1 = document.getElementById("subcount");
  let text2 = document.getElementById("viewcount");

useEffect(() => {
    intoview();
    fetchyoutubeapi();
  });

  async function fetchyoutubeapi() {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC2TuAzbHxLIZwJqlofj_oXw&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    );
    setviewcount(data.items[0].statistics.viewCount);
    setsubscribercount(data.items[0].statistics.subscriberCount);
  }

  function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }
      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);

      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };

    //start animating
    window.requestAnimationFrame(step);
  }

 

  function load() {
    loadonce = true;
    animate(text1, 0, subscribercount, 4000);
    animate(text2, 0, viewcount, 4000);
  }

  function intoview() {
    const statsection = document.getElementById("Statistics");

    document.addEventListener("scroll", function () {
      var clientHeight = document.documentElement.clientHeight;
      var statsSectionY = statsection.getBoundingClientRect().y;
      var statsSectionHeight = statsection.getBoundingClientRect().height;
      if (clientHeight > statsSectionY + (statsSectionHeight * 1.5)) {
        if (loadonce == false) {
          load();
        }
      }
    });
  }

  return (
    <section id="Statistics">
     
         
            
              <div class="stat">
                <p class="statistics__text">
                Subscribers
                </p>
                <p class="statistics__text" id="subcount">0</p>
              </div>
              <div class="stat">
                <p class="statistics__text">
                Total views
                </p>
                <p class="statistics__text" id="viewcount">0</p>
              </div>
           
          
       
    </section>
  );
};

export default Statistics;
