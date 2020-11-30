import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'

const AdmissionsForm = () => {

const [first, setFirst] = useState("")
const [last, setLast] = useState("")
const [email, setEmail] = useState("")
const [submitted, setSubmitted] = useState(false)

const [change1, setChange1] = useState("24 / x+1")
const [change2, setChange2] = useState("Kings of Britain")
const [change3, setChange3] = useState("1")


let cascadeChange1 = () => {
  setChange1("⋓ ☥ ☬")
  setChange2("Botanica Occultus")
  setTimeout(function() {setChange1("24 / x+1")}, 1000)
  setTimeout(function() {setChange2("Kings of Britain")}, 2000)
  setTimeout(function() {setChange3("〆")}, 3000)
  setTimeout(function() {setChange3("1")}, 5000)
}

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
      <p>Thank you for your interest in applying to Brakebills.  Traditionally, our perstigious University
        has operated admissions on an invite-only basis. If you would like to be considered
        for an admissions interview, please complete the form below to the best of your abilities.
      </p>
      <hr></hr><br></br><br></br>
        <Form   >
        <Form.Group widths='equal'>
          <Form.Input onChange={updateFirst}  fluid label='First name' value={first} placeholder='First name' /><br />
          <Form.Input onChange={updateLast} fluid label='Last name' value={last} placeholder='Last name' />
          <Form.Input onChange={updateEmail}  fluid label='Email' value={email} placeholder='Email address' />
       </Form.Group>
       <Form.Group unstackable widths={2}>
      <Form.Input label='Current University' placeholder='Current University' />
      <Form.Input label='Course of Study' placeholder='Course of Study' />
    </Form.Group>
    <br></br><br></br>
    <hr></hr>
   
   <div classname="quiz-container">

      <Form.Input onChange={cascadeChange1} className="quiz-item" label={`What is one possible solution to the equation (${change1}) - (12 / x-1) = ${change3} ?`} 
      placeholder='Answer' />
   
    <Form.Input className="quiz-item" label={`Who wrote the 12th-century account Historia regum Britanniae (The History of the ${change2}), which is often credited with making the legend of King Arthur popular?`} 
      placeholder='Answer' />

    <Form.Input className="quiz-item" label={`Translate the following:  "ἡ μὲν Ξανθίππη πολλάκις λέγει · "ἴθι δή" καὶ τὸν Σωκράτην ἐκ τοῦ οἴκου ἐλαύνει. ἔπειτα δὲ, ὁ Σωκράτης πρὸς τὴν ἀγορὰν βραδέως βαίνει. ὁ δὲ Σωκράτης χαίρει βαίνειν ἐκεῖσε διότι ὁ Σωκράτης φιλεῖ μετὰ τῶν φιλῶν λέγειν."`} 
      placeholder='Answer' />

    <Form.Input className="quiz-item" label={`If the expression (4x² / 2x - 1)  is written in the equivalent form  (1 / 2x - 1)+ A, what is A in terms of x?`} 
      placeholder='Answer' />

<Form.Input className="quiz-item" label={`What natural human bodily fluid did Romans use as mouth wash because of the presence of ammonia in it?`} 
      placeholder='Answer' />

<Form.Input className="quiz-item" label={`What natural human bodily fluid did Romans use as mouth wash because of the presence of ammonia in it?`} 
      placeholder='Answer' />
  
  </div>
    
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