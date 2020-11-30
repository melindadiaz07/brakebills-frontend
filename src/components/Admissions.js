import React from 'react'
import AdmissionsForm from './AdmissionsForm'
import { Form } from 'semantic-ui-react'

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

          <hr></hr>

          <Form   >
          <Form.Group widths='equal'>
          <Form.Input   fluid label='First name'  placeholder='First name' /><br />
          <Form.Input  fluid label='Last name'  placeholder='Last name' />
          <Form.Input   fluid label='Email'  placeholder='Email address' />
       </Form.Group>
       <Form.Group widths='equal'>
          <Form.Input   fluid label='Current Area of Study'  placeholder='First name' /><br />
          <Form.Input  fluid label='Advisor Name'  placeholder='Last name' />
       </Form.Group>
       <Form.Button content='Submit' />
        </Form>
        </div>
      )
     }

    </div>
  )
}

export default Admissions;