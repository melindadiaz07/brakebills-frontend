import React, { useEffect, useState } from 'react';
import PostCard from './PostCard'
import PostForm from './PostForm'
import ReplyCard from './ReplyCard'
import ReplyForm from './ReplyForm'



const MessageBoard = () => {

  const [posts, setPosts] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [renderedReplies, setRenderedReplies] = useState([])

  const handleClick = (post) => {
    setSelectedPost(post)
    if (post.replies !== null) {
      setRenderedReplies(post.replies)
    }
    console.log(renderedReplies)

  }

  let getPosts = () => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(postsData => {
      setPosts(postsData)
    })
  }
  useEffect(getPosts, [])

  let handlePostSubmit = (event, category, content) => {
    event.preventDefault()
    console.log(category, content)
  }

  let handleReplySubmit = (event, reply) => {
    event.preventDefault()
  }


  return(
    <div>
      <h3>Message Board</h3>
    <div className="message-board-container">

      <div className="posts-container">
        { !posts ? null : posts.map(post => {
          return <PostCard post={post} key={post.id} handleClick={handleClick} />
        })}
      </div>

      <div className="replies-container">
        
        <div className="replies-list-container">
        <h4 className="replies-box-header"><em>Replies</em></h4>
        { !renderedReplies ? null : 
          renderedReplies.map(reply => {
            return <ReplyCard reply={reply} key={reply.id}/>
          })
        }
        </div>

        <div className="reply-form-container">
          <ReplyForm handleSubmit={handleReplySubmit}/>
          </div>
      </div>

      <div className="post-form-container">
         <PostForm handleSubmit={handlePostSubmit}/>
       </div>

      </div>
    </div>
  )
}

export default MessageBoard;