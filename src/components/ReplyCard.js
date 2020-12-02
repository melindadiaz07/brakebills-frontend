import React from 'react';


const ReplyCard = (props) => {

  const deleteReply = () => {
    fetch(`http://localhost:3000/replies/${props.reply.id}`, {
      method: "DELETE"
    })
    props.rerenderReplies(props.reply)

  }


  return(
    <div>
      {
      props.admin === false ?
    (
      <div className="reply-card" >
      <p><b>{props.reply.replier}</b></p>
      <p>{props.reply.content}</p>
    </div>
    )  : 
    
    (<div className="reply-card" >
      <button onClick={(event) => deleteReply(event)}> ⚐ </button><br></br>
      <p><b>{props.reply.replier}</b></p>
      <p>{props.reply.content}</p>
    </div>)
  
    }
  </div>
  )
}
export default ReplyCard;