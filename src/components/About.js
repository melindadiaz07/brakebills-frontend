import React from 'react'

const About = ({logged_in}) => {

  return(
    <div className="about-page-container">
     { !logged_in ?
        (
        <div>
            <h2>
              Brakebills University of Arts and Sciences
            </h2>
        </div>
      
      ) : (
        <div>
          <h2>
            Brakebills University for Magical Pedagogy
          </h2>
        </div>
      )
     }

    </div>
  )
}

export default About;

