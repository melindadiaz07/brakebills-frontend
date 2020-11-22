import React from 'react'
import AdmissionsForm from './AdmissionsForm'

const Admissions = ({logged_in}) => {

  return(
    <div>
     { !logged_in ?
        (
        <div>
             <AdmissionsForm />
        </div>
      
      ) : (
        <div>
          <p>
            We're so delighted to have you at Brakebills. 
          </p>
          <p>
          If you would like to apply to a new Area of study, please fill out the form below.
          </p>
        </div>
      )
     }

    </div>
  )
}

export default Admissions;