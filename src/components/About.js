import React from 'react'

const About = ({logged_in}) => {

  return(
    <div>
     { !logged_in ?
        (
        <div>
            <p>
              Fake About
            </p>
        </div>
      
      ) : (
        <div>
          <p>
            Real About
          </p>
        </div>
      )
     }

    </div>
  )
}

export default About;

