import React, {useState} from 'react';


const Videocard = (video) => {
    const [data, setdata] = useState(video.video.snippet.resourceId.videoId);
   

    function videolarge(ye){ 
        setdata(ye)
       var hi = document.getElementById("videoplayer")
       hi.innerHTML = ""
       hi.innerHTML += `<iframe class="videoplayer" width="980" height="570" src="//www.youtube.com/embed/${data}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreenu003eu003c" iframe/>`
       
        console.log(data)
        console.log(hi)
        
    }

    
   
    return (
        
       
           <div className="videosection__card" onClick={() => videolarge(video.video.snippet.resourceId.videoId)}> 
      <div className="videosection__card--desc"> {video.video.snippet.description}</div>
    <img className="videosection__thumbnail" src= {video.video.snippet.thumbnails.medium.url}/>
  
    <div className="videosection__card--title">
    {video.video.snippet.title}
    </div>



     
    </div>
       
    )
}

export default Videocard;
