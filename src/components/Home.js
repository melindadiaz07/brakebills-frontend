import React, { useState } from 'react';
import video from '../images/classroomshot.mp4'



const Home = ({logged_in}) => {


  return(
<div className="home-page-container">
     { !logged_in ?
        (
        <div className="home-page-vid-container" >
            <video loop autoPlay src={video} type="video/mp4" width="100%"/>
        </div>
      
      ) : (
        <div className="home-page-vid-container">
        </div>
      )
     }

    </div>
  )
}

export default Home;