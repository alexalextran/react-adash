import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Videocard from "./ui/VideoCard";


const Videosection = () => {
  const [data, setdata] = useState();
  const [state, setstate] = useState(false);
  const [videoarray, setvideoarray] = useState([])


  

  useEffect(() => {
    getPlaylistId();
  }, []);

  async function getPlaylistId() {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2C%20snippet&channelId=UC2TuAzbHxLIZwJqlofj_oXw&&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    );

    setdata(data);
    
  }

  async function getVideos(id) {
    var { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${id}&&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    );
    
    setvideoarray(data.items)
    
   
  }

  function getId(name) {
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].snippet.title == name) {
        var id=(data.items[i].id)
        console.log(id)
        getVideos(id)
        setstate(true)
        break;
      }
    }
  }


  console.log(videoarray)

 
 
 

 

  return (
    <section id="videosection">
      <div id="videosection__nav">
        <ul className="videosection__topics flex-row">
          <li
            onClick={() => 
            
            getId("Physics")}
            className="videosection__topic gold"
          >
            Physics
          </li>
          <li
            onClick={() => 
              
              getId("Chemistry")}
            
            className="videosection__topic gold"
          >
            Chemistry
          </li>
          <li
            onClick={() =>  
            getId("Mathematics")}
            
            className="videosection__topic gold"
          >
            Math
          </li>
        </ul>

        <form className="videosection__searchbar">
          <input className="videosection__searchbar--input"></input>

          <select className="videosection__searchbar--select">
            <option value="saab">Sort By</option>
            <option value="volvo">Popularity</option>
            <option value="saab">Date</option>
          </select>
          <FontAwesomeIcon
            className="videosection__searchbar--icon"
            icon="search"
          />
        </form>
      </div>

      <div className="videosection__wrapper">

     
 {state == true &&
        
        
        

        videoarray.map((vid, index) => <Videocard video={vid} key={index}/>) 
        }
        
      </div>

      <div id="videoplayer">

      </div>

     
    </section>
  );
};

export default Videosection;