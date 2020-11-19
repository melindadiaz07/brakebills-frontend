import React from 'react';
import FacultyCard from './FacultyCard'

const Faculty = ({logged_in}) => {

  return(
    <div>
     { !logged_in ?
        (
        <div>
            <p>
              Fake Faculty
            </p>
        </div>
      
      ) : (
        <div>
          <p>
            Real Faculty
          </p>
        </div>
      )
     }

    </div>
  )
}

export default Faculty 