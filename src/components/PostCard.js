import React, { useEffect } from 'react';



const PostCard = (props) => {

  let username = props.post.user.username
  let title = props.post.title
  let category = props.post.category
  let content = props.post.content

  console.log(category)

  return(
    <div className="single-post-container" id={`${props.post.id}`} onClick={(event) => props.handleClick(event, props.post)}>
      <b>{username}</b>
      <p className="post-title"> <em>{category}</em> <br></br> {title}</p>
      <p className="post-content">{content}</p>
      <div className="reply-button"> reply ↪ </div>
    </div>
  )
}

export default PostCard