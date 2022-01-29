import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Videocard from "./ui/VideoCard";
import { Link } from "react-router-dom";
import Videocardalt from "./ui/Videocardalt";
import loadingimage from "../assets/Atom.svg.png"

const Videosection = () => {
  const [data, setdata] = useState();
  const [state, setstate] = useState(false);
  const [videoarray, setvideoarray] = useState([]);
  const [videoid, setvideoid] = useState();
  const [statealt, setstatealt] = useState(false);
  const [otherarray, setotherarray] = useState([]);
  const [loading, setloading] = useState(false);
  

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
   setloading(false)
    setvideoarray(data.items);
  }

  function getId(name) {
    setloading(true)

    setotherarray([])
    setvideoarray([])
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].snippet.title == name) {
        var id = data.items[i].id;
        setvideoid(id);
        getVideos(id);
        
        setstatealt(false);
        setstate(true);
        break;
      }
    }
  }

  function playervisibility() {
    var videoplayer_html = document.querySelector(".videoplayer__screen");
    console.log(videoplayer_html);
    videoplayer_html.classList.add("notvisible");
    videoplayer_html.innerHTML = "";
  }

  async function search(event) {
    event.preventDefault();
    setstatealt(false);
    getVideos(videoid);
    const searchvalues = []
    var filtered__array = []
    var searchvalue = document.getElementById("video__search").value.toLowerCase().split(" ");
    if (searchvalue == "") {
      return;
    }
    for (let i = 0; i < videoarray.length; i++) {
      if (videoarray[i].snippet.title.toLowerCase().includes(searchvalue)) {
        searchvalues.push(videoarray[i].id)
      }
    }
  
    (filtered__array = videoarray.filter( video =>
      searchvalues.includes(video.id)))


    console.log(searchvalues)
    console.log(filtered__array)
    setotherarray(filtered__array);
    setstate(false);
    setstatealt(true);
  }

  return (
    <section id="videosection">
      <div id="videosection__nav">
     <p className="videosection__nav--info">Please select a category first!</p> 
        <ul className="videosection__topics flex-row">
          <div
            onClick={() => getId("Physics")}
            className="videosection__topic gold clickable "
          >
            <span className="carousel__button ">
              <FontAwesomeIcon icon="atom" />
            </span>
            Physics
          </div>
          <div
            onClick={() => getId("Chemistry")}
            className="videosection__topic gold clickable"
          >
            <span className="carousel__button ">
              <FontAwesomeIcon icon="superscript" />
            </span>
            Chemistry
          </div>
          <div
            onClick={() => getId("Mathematics")}
            className="videosection__topic gold clickable"
          >
            <span className="carousel__button ">
              <FontAwesomeIcon icon="atom" />
            </span>
            Math
          </div>
        </ul>

        <form
       
          className="videosection__searchbar"
          onSubmit={(event) => search(event)}
        >
          <input
          required
            className="videosection__searchbar--input"
            id="video__search"
          ></input>

          <button className="videosection__searchbar--icon">
            <FontAwesomeIcon icon="search" />
          </button>
        </form>

        <Link to="/">
          <button className="homebutton clickable">
            Home
            <FontAwesomeIcon icon="home" />
          </button>
        </Link>
      </div>

      <div className="videosection__wrapper">
        
        { loading == true && 
          <div className="videosection__loading">

            <img className="videosection__loading--image" src={loadingimage}/>
            <p className="videosection__loading--title">
              Loading...
            </p>
          </div>
        }
        


          {state == true &&
          videoarray.map((vid, index) => (
          <Videocard video={vid} key={index} />))
          }
       

        {statealt == true &&
          otherarray.map((vid, index) => (
            <Videocardalt video={vid} key={index} />
          ))

          } 
        
      </div>

      <div id="videoplayer" onClick={() => playervisibility()}></div>
    </section>
  );
};

export default Videosection;
