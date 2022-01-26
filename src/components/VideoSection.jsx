import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Videosection = () => {
  const [data, setdata] = useState();
  const [playlistid, setplaylistid] = useState();
  const [videos, setvideos] = useState();
  

  useEffect(() => {
    getPlaylistId();
  }, [videos]);

  async function getPlaylistId() {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2C%20snippet&channelId=UC2TuAzbHxLIZwJqlofj_oXw&&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    );

    setdata(data);
    
  }

  async function getVideos() {
    var { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistid}&&key=AIzaSyCyHo6bVVilK7tOidj7XhQRiQSGOYFo2Lo`
    );
    setvideos(data.items)
    videohtml()
  }

  function getId(name) {
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].snippet.title == name) {
        setplaylistid(data.items[i].id);
        getVideos()
        
        break;
      }
    }
  }


  function videohtml(){
    const videowrapper = document.querySelector('.videosection__wrapper')
    
    
    videowrapper.innerHTML = videos.map((video) => html(video)).join('')
   console.log("well this is odd")
  }

  function html(video){
    return `<div class="videosection__card"> 
    Video 

    <div class="videosection__card--title">
    ${video.snippet.title}
    </div>
     
    </div>
    
    `
  }
 


  return (
    <section id="videosection">
      <div id="videosection__nav">
        <ul className="videosection__topics flex-row">
          <li
            onClick={() => 
            {for(let i = 0; i < 3; i++)
            getId("Physics")}
            }className="videosection__topic gold"
          >
            Physics
          </li>
          <li
            onClick={() => 
              {for(let i = 0; i < 3; i++)
              getId("Chemistry")}
            }
            className="videosection__topic gold"
          >
            Chemistry
          </li>
          <li
            onClick={() =>  {for(let i = 0; i < 3; i++)
            getId("Mathematics")}
            }
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

      </div>
    </section>
  );
};

export default Videosection;
