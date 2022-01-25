import React from "react";

const Videosection = () => {
  return (
    <section id="videosection">
      <div id="videosection__nav">

      <ul className="flex-row">
          <li className="videosection__topic">
              Physics
          </li>
          <li className="videosection__topic">
              Chemistry
          </li>
          <li className="videosection__topic">
              Math
          </li>
      </ul>
    
        <select>
        <option value="saab">Sort By</option>
          <option value="volvo">Popularity</option>
          <option value="saab">Date</option>
        </select>
      </div>
    </section>
  );
};

export default Videosection;
