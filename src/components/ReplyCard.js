import React from 'react';


const ReplyCard = (props) => {

  return(
    <div className="reply-card" >
      <p>{props.reply.replier}</p>
      <p>{props.reply.content}</p>
    </div>
  )
}
export default ReplyCard;