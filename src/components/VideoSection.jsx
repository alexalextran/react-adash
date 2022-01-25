import React from "react";

const Videosection = () => {
  return (
    <section id="videosection">
      <div id="videosection__nav">
        <ul className="videosection__topics flex-row">
          <li className="videosection__topic gold">Physics</li>
          <li className="videosection__topic gold">Chemistry</li>
          <li className="videosection__topic gold">Math</li>
        </ul>

        <div className="videosection__searchbar">
          <form>
            <input></input>

            <select>
              <option value="saab">Sort By</option>
              <option value="volvo">Popularity</option>
              <option value="saab">Date</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Videosection;
