import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'


const ReplyForm = (props) => {

  const [reply, setReply] = useState('')

  const updateReplyContent = (event) => {
    event.preventDefault()
    setReply(event.target.value)
  }

  let clearForm = () => {
    setReply("")
  }

  return(
    <div >
      <form  onSubmit={(event) => {
        props.handleSubmit(event, reply)
        clearForm()
        }} className="reply-form">
      <textarea onChange={(event) => updateReplyContent(event)} className="reply-form-textarea" placeholder={`Reply to ${props.replyTo}...`} value={reply} />
      <button className="reply-submit-btn" type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default ReplyForm