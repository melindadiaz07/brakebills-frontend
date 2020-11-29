import React, { useEffect, useState } from 'react';
import video from '../images/classroomshot.mp4'



const Home = ({logged_in}) => {



return(
  <div className="home-page-container">
     { !logged_in ?
        (<div>
        <div className="home-page-vid-container" >
         <div className="header-background" ></div>
          <div className="home-page-header">
            <h2>Brakebills <br></br><span className="university-span">University</span> <span className="header-span">of Arts and Sciences</span></h2></div>
            <div className="announcements-container"><h3>Announcements:  Brakebills campus will be closed until March 3rd for repair of a gas leak.</h3></div>
          <video autoPlay loop muted src={video} type="video/mp4" width="100%"/>
            
        </div>

      </div>
      ) : (
        <div>
        <div className="home-page-vid-container" >
         <div className="header-background" ></div>
          <div className="home-page-header">
            <h2>Brakebills <br></br><span className="university-span">University</span><br></br><span className="header-span">for Magical Pedogogy</span></h2></div>
            <div className="announcements-container"><h3>Announcements:  Brakebills campus will be closed until March 3rd for repair of a gas leak.</h3></div>
          <video autoPlay loop muted src={video} type="video/mp4" width="100%"/>
            
        </div>

      </div>
      )
     }

    </div>
  )
}

export default Home;