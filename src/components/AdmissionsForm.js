import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const AdmissionsForm = () => {

const [first, setFirst] = useState("")
const [last, setLast] = useState("")
const [email, setEmail] = useState("")
const [submitted, setSubmitted] = useState(false)

let updateFirst = (event) => {
  setFirst(event.target.value)
}

let updateLast = (event) => {
  setLast(event.target.value)
}

let updateEmail = (event) => {
  setEmail(event.target.value)
}

let addUser = () => {
  fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({username: email, first: first, last: last})
  })
  .then(res => res.json())
  setFirst("")
  setLast("")
  setEmail("")
  setSubmitted(true)
}


  return(
    <div className="admissions-form-container">
        <Form  size="small" key="small" >
        <Form.Group widths='equal'>
          <Form.Input onChange={updateFirst} fluid label='First name' value={first} placeholder='First name' /><br />
          <Form.Input onChange={updateLast} fluid label='Last name' value={last} placeholder='Last name' />
          <Form.Input onChange={updateEmail} fluid label='Email' value={email} placeholder='Email address' />
       </Form.Group>
       <Form.Group unstackable widths={2}>
      <Form.Input label='Current University' placeholder='Current University' />
      <Form.Input label='Course of Study' placeholder='Course of Study' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
       <Form.Group unstackable widths={3}>
      <Form.Input label='Current University' placeholder='Current University' />
      <Form.Input label='Course of Study' placeholder='Course of Study' />
      <Form.Input label='Course of Study' placeholder='Course of Study' />
    </Form.Group>
    <Form.Group widths={3}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Phone' placeholder='Phone' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Conditions' />
       <Form.Button content='Submit' onClick={addUser} />
       </Form>
       {
         !submitted ? null : 
         <div>Thanks for your submission! Don't call us, we'll call you.</div>
       }
    </div>
  )
}

export default AdmissionsForm

// add form components with questions about history, math, 
// and science that will flicker for a literal second or two 
// to be a slightly different question