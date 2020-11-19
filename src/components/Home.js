import React, { useState } from 'react';


const Home = ({logged_in}) => {


  return(
<div className="home-page-container">
     { !logged_in ?
        (
        <div className="home-page-vid-container" >
           
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