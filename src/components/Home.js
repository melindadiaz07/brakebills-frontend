import React, { useEffect, useState } from 'react';
import video from '../images/classroomshot.mp4'
import video2 from '../images/magichomepagevid.mp4'
import * as announcements from './AnnouncementsCarousel'



const Home = ({logged_in}) => {

// const [fakeAnnouncement, setFakeAnnouncement] = useState("")
// const [realAnnouncement, setRealAnnouncement] = useState("")


// const announcements = () => {
//   setInterval(() => {
   
//   }, time)
// }

return(
  <div className="home-page-container">
     { !logged_in ?
        (<div>
        <div className="home-page-vid-container" >
         <div className="header-background" ></div>
          <div className="home-page-header">
          <video autoPlay loop muted src={video} type="video/mp4" width="100%" />
            <h2>Brakebills <br></br><span className="university-span">University</span> <span className="header-span">of Arts and Sciences</span></h2></div>
        <div className="announcements-container"><h3> { announcements.fake() } </h3></div>
            
        </div>

      </div>
      ) : (
        <div>
        <div className="home-page-vid-container" >
         <div className="header-background" ></div>
          <div className="home-page-header">
          <video autoPlay loop muted src={video2} type="video/mp4" width="100%"/>
            <h2>Brakebills <br></br><span className="university-span">University</span><br></br><span className="header-span">for Magical Pedogogy</span></h2></div>
            <div className="announcements-container"><h3>{ announcements.real() }</h3></div>
            
        </div>

      </div>
      )
     }

    </div>
  )
}

export default Home;