import React from "react";
import whyussvg from "../assets/whyus.svg";

const Whyus = () => {
  return (
    <section id="Whyus">
      <div className="Whyus__left">
        <div className="whyus__header">
          <p className="whyus__title">
            Why should you keep up to date with us?
          </p>
          <img src={whyussvg} className="whyussvg" />
        </div>
        <div className="whyus__subscribe">
          <button className="cssbuttons-io-button">
            Subscribe!
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
      </div>

      <div className="Whyus__Right">
        <div className="whyus__card">
          <img />
          <div>
            <h2>Weekly Videos!</h2>
            <p>
              We produce <span className="gold">weekly</span> content so feel free to request a video on a
              topic you'd like, we'll get to it!
            </p>
          </div>
        </div>
        <div className="whyus__card">
          <img />
          <div>
            <h2>Various Content</h2>
            <p>
              We create content not just on one subject, but a <span className="gold">whole range</span>  of topics from different subjects such as chemistry, math and physics.
            </p>
          </div>
        </div>
        <div className="whyus__card">
          <img />
          <div>
            <h2>Most Importantly Its <span className="gold">free</span> !</h2>
            <p>
              We don't charge a single cent so that<span className="gold">anyone</span>  can watch these videos, and that's the best part!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;