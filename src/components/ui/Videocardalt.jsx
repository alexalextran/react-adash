import React, {useState, useEffect} from 'react';


const Videocardalt = (video) => {

    useEffect(() => {
        
            setdata(video)
        
        return () => {
            setdata("nothing")
        };
    });

  

    const [data, setdata] = useState(video.video.snippet.resourceId.videoId);
    const [htmlelement, sethtmlelement] = useState(document.getElementById("videoplayer"))
 
    function videolarge(clickdata){ 
        setdata(clickdata)
        htmlelement.innerHTML = ""
        htmlelement.innerHTML += 
        `<div class="videoplayer__screen">

        <div class="videoplayer__wrapper">
        <p class="videoplayer__text" style="color: white"> Click outside the video to exit </p>
        <iframe class="videoplayer" width="980" height="570" src="//www.youtube.com/embed/${video.video.snippet.resourceId.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreenu003eu003c" iframe/>
        
       <div>
        
       
        </div>`
       
      
    }

    
   
    return (
       
           <div className="videosection__card" onClick={() => 
           videolarge(video.video.snippet.resourceId.videoId)}> 
      <div className="videosection__card--desc"> {video.video.snippet.description}</div>
    <img className="videosection__thumbnail" src= {video.video.snippet.thumbnails.medium.url}/>
  
    <div className="videosection__card--title">
    {video.video.snippet.title}
    </div>



     
    </div>
       
    )
}

export default Videocardalt;
