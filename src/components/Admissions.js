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
        <div className="private-admissions">
          <p>
            <em>We're so delighted to have you at Brakebills. </em>
          </p>
          <p>
          <em>If you would like to apply to a new Area of study, please fill out the form below.</em>
          </p>
          <br></br>

          <form >
            <label>Current Area of Study</label><br></br>
            <input placeholder=""/>
            



          </form>
        </div>
      )
     }

    </div>
  )
}

export default Admissions;