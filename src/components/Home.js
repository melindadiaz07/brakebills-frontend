import React, { useEffect, useState } from 'react';
import video from '../images/classroomshot.mp4'



const Home = ({logged_in}) => {



return(
  <div className="home-page-container">
     { !logged_in ?
        (<div>
        <div className="home-page-vid-container" >
         
            <h2>Brakebills University of Arts and Sciences</h2>
            <h3>Announcements: </h3>
          <video autoPlay loop muted src={video} type="video/mp4" width="100%"/>
            
        </div>

      </div>
      ) : (
        <div>
        <div className="home-page-vid-container" >
            <video loop autoPlay src={video} type="video/mp4" width="100%"/>
        </div>
        <h2>Brakebills University of Magical Pedogogy</h2>
        </div>
      )
     }

    </div>
  )
}

export default Home;