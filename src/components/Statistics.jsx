import React from 'react';

const Statistics = () => {

    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;
        let currentTime = Date.now();
    
        //pass the current timestamp to the step function
        const step = (currentTime ) => {
    
            //if the start time is null, assign the current time to startTime
            if (!startTime) {
                  startTime = currentTime ;
            }
    
            //calculate the value to be used in calculating the number to be displayed
            const progress = Math.min((currentTime  - startTime) / duration, 1);
    
            //calculate what to be displayed using the value gotten above
            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
            //checking to make sure the counter does not exceed the last value (lastVal)
            if (progress < 1) {
                  window.requestAnimationFrame(step);
            }
            else{
                  window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };
    
        //start animating
        window.requestAnimationFrame(step);
    }
    
    let text1 = document.getElementById('subcount');
    let text2 = document.getElementById('viewcount');
    
    
    const load = () => {
        animate(text1, 0, 1702, 4000);
        animate(text2, 0, 1506, 4000);
      
    }


    return (
        <section id='Statistics'>
         <div onload={load()}>
     
      <p>
      <div class="container">
         <div class="row">
            <div class="col-sm">
               <p id='subcount' class="fs-2 text-light">0</p>
               <p class="text-light">Subscribers</p>
            </div>
            <div class="col-sm">
               <p id='viewcount' class="fs-2 text-light">0</p>
               <p class="text-light">Total views</p>
            </div>
         
         </div>
      </div>
      </p>
   </div>

        </section>
    );
}

export default Statistics;
