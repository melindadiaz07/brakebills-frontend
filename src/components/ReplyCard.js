import React from 'react';


const ReplyCard = (props) => {

  return(
    <div className="reply-card" >
      <p><b>{props.reply.replier}</b></p>
      <p>{props.reply.content}</p>
    </div>
  )
}
export default ReplyCard;