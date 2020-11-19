import React from 'react'
import AdmissionsForm from './AdmissionsForm'

const Admissions = ({logged_in}) => {

  return(
    <div>
     { !logged_in ?
        (
        <div>
            <p>
              Fake Admissions
            </p>
        </div>
      
      ) : (
        <div>
          <p>
            Real Admissions
          </p>
        </div>
      )
     }

    </div>
  )
}

export default Admissions;