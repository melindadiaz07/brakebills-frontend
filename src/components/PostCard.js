import React, { useEffect } from 'react';



const PostCard = (props) => {

  let username = props.post.user.username
  let title = props.post.title
  let category = props.post.category
  let content = props.post.content


  return(
    <div className="single-post-container" onClick={() => props.handleClick(props.post)}>
      <b>{username}</b>
      <p>Title: {title}</p>
      <p>Category: {category}</p>
      <p>{content}</p>
    </div>
  )
}

export default PostCard