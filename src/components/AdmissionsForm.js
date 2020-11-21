import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const AdmissionsForm = () => {

const [first, setFirst] = useState("")
const [last, setLast] = useState("")
const [email, setEmail] = useState("")

let updateFirst = (event) => {
  setFirst(event.target.value)
}

let updateLast = (event) => {
  setLast(event.target.value)
}

let updateEmail = (event) => {
  setEmail(event.target.value)
}



  return(
    <div className="form-container">
        <Form  size="small" key="small" >
        <Form.Group widths='equal'>
          <Form.Input onChange={updateFirst} fluid label='First name' value={first} placeholder='First name' /><br />
          <Form.Input onChange={updateLast} fluid label='Last name' value={last} placeholder='Last name' />
          <Form.Input onChange={updateEmail} fluid label='Email' value={email} placeholder='Email address' />
       </Form.Group>
       <Form.Button content='Submit' />
       </Form>
    </div>
  )
}

export default AdmissionsForm