import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect} from "react";

const Videosection = () => {



  useEffect(() => {
    getPlaylistId()
  });


  async function getPlaylistId(){
    const {data} = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2C%20snippet&channelId=UC2TuAzbHxLIZwJqlofj_oXw&&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    )

      console.log(data.items[0].snippet.title)

  }



  return (
    <section id="videosection">
      <div id="videosection__nav">
        <ul className="videosection__topics flex-row">
          <li className="videosection__topic gold">Physics</li>
          <li className="videosection__topic gold">Chemistry</li>
          <li className="videosection__topic gold">Math</li>
        </ul>

        
          <form className="videosection__searchbar">
            <input className="videosection__searchbar--input"></input>

            <select className="videosection__searchbar--select">
              <option value="saab">Sort By</option>
              <option value="volvo">Popularity</option>
              <option value="saab">Date</option>
            </select>
            <FontAwesomeIcon className="videosection__searchbar--icon" icon="search"/>
          </form>
        </div>
    
    </section>
  );
};

export default Videosection;
