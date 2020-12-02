import React, { useEffect } from 'react';



const PostCard = (props) => {

  let username = props.post.user.username
  let title = props.post.title
  let category = props.post.category
  let content = props.post.content

  const deletePost = () => {
    fetch(`http://localhost:3000/posts/${props.post.id}`, {
      method: 'DELETE'
    })
    .then(post => {
      props.getPosts()
      props.resetOnDelete()
    })
    props.getPosts()
  }

  return(

    <div>
      { props.admin ? 
    (<div className="single-post-container" id={`${props.post.id}`} >
      <b>{username}</b>
      <p className="post-title"> <button onClick={() => deletePost()}> ⚐ </button><br></br><em>{category}</em> <br></br> - {title} -</p>
      <p className="post-content">{content}</p>
      <div className="reply-button" onClick={(event) => props.handleClick(event, props.post)}> reply ↪ </div>
      
    </div>) : (

<div className="single-post-container" id={`${props.post.id}`} onClick={(event) => props.handleClick(event, props.post)}>
      <b>{username}</b>
      <p className="post-title"> <em>{category}</em> <br></br> - {title} -</p>
      <p className="post-content">{content}</p>
      <div className="reply-button"> reply ↪ </div>
      
    </div>


          )
      }
    </div>
  )
}

export default PostCard