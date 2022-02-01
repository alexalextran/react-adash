import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ytvideos = () => {
  function carousel() {
    document.querySelectorAll(".carousel").forEach((carousel) => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttons = carousel.querySelectorAll(".carousel__button");

      buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
          // un-select all the items
          var iframe = document.getElementsByTagName("iframe");

          for (let k = 0; k < buttons.length; k++) {
            if (k == i) {
            } else {
              var url = iframe[k].getAttribute("src");
              iframe[k].setAttribute("src", url);
            }
          }

          items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
          );
          buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
          );

          items[i].classList.add("carousel__item--selected");
          button.classList.add("carousel__button--selected");
        });
      });

      // Select the first item on page load
      items[0].classList.add("carousel__item--selected");
      buttons[0].classList.add("carousel__button--selected");
    });
  }

  function stopThis() {}

  useEffect(() => {
    carousel();
    stopThis();
  }, []);

  return (
    <section id="YTvideos">

   
      <div className="carousel">
        <div className="carousel__item--wrapper">
        <div className="YTvideos__header--text">
   <h1 className="YTvideos__header--title gold">Recommended Videos</h1>
   <p>Watch some of our top videos on Mathematics, Phyiscs and Chemistry</p>
</div>
          <div className="carousel__item">
            <iframe
              width="850"
              height="480"
              src="https://www.youtube.com/embed/roZrLIHFHw0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel__item">
            <iframe
              width="850"
              height="480"
              src="https://www.youtube.com/embed/rQPw4AnT5pQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel__item">
            <iframe
              width="850"
              height="480"
              src="https://www.youtube.com/embed/CTvOAQpfWBY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="carousel__nav">
          <span className="carousel__button clickable">
            <FontAwesomeIcon icon="flask" />
          </span>
          <span className="carousel__button clickable">
            <FontAwesomeIcon icon="superscript" />
          </span>
          <span className="carousel__button clickable">
            <FontAwesomeIcon icon="atom" />
          </span>
           <p>(Click the icons to switch between videos)</p>
        </div> 
      
      </div>
    </section>
  );
};

export default Ytvideos;
