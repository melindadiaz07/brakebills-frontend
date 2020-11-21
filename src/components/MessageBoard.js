import React, { useEffect, useState, useRef } from 'react';
import PostCard from './PostCard'
import PostForm from './PostForm'
import ReplyCard from './ReplyCard'
import ReplyForm from './ReplyForm'



const MessageBoard = () => {

  const [posts, setPosts] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [renderedReplies, setRenderedReplies] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const messagesEnd = useRef()
  const repliesEnd = useRef()

  const handleClick = (post) => {
    setSelectedPost(post)
    if (post.replies !== null) {
      setRenderedReplies(post.replies)
      scrollToBottomReplies()
    }
  }


  let getPosts = () => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(postsData => {
      setPosts(postsData)
      setFilteredPosts(postsData)
      scrollToBottomPosts()
    })
    
  }
  useEffect(getPosts, [])

  let scrollToBottomPosts = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  let scrollToBottomReplies = () => {
    repliesEnd.current.scrollIntoView({ behavior: "smooth" });
  }


  let handlePostSubmit = (event, title, category, content) => {
    event.preventDefault()
    fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: title, category: category, content: content, user_id: 8})
    })
    .then(res => res.json())
    getPosts()
    scrollToBottomPosts()
  }

  let handleReplySubmit = (event, content) => {
    event.preventDefault()
    fetch("http://localhost:3000/replies", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({replier: "random@email.com", content: content, post_id: selectedPost.id})
    })
    .then(res => res.json())
    .then(newReply => {
      setRenderedReplies([...renderedReplies, newReply])
      scrollToBottomReplies()
    })
  }

  const updateCategory = (event) => {
    event.preventDefault()
    let filter = (event.target.value)
    filterByCategory(filter)
  }

  const filterByCategory = (filter) => {
    if (filter === "All"){
    setFilteredPosts(posts)
    } else {
    let filteredPosts = posts.filter(post => post.category === filter)
    setFilteredPosts(filteredPosts)
    }
    
  }


  return(
    <div>
      <h3>Message Board</h3>

      <div className="filter-div"> 
      <label>Category: </label><br />
          <select onChange={(event) => updateCategory(event)} name="catgory" className="filter-category">
          <option  value="All" >All</option>
            <option  value="Misc" >Misc</option>
            <option  value="Lost and Found" >Lost and Found</option>
            <option  value="Housing">Housing</option>
            <option  value="Sports">Sports</option>
            <option  value="Events">Events</option>
          </select><br/>
      </div>
    <div className="message-board-container">

      <div className="posts-container">
        { !filteredPosts ? null : filteredPosts.map(post => {
          return <PostCard post={post} key={post.id} handleClick={handleClick} />
        })}
        <div ref={messagesEnd} className="bottom-of-messages" />
      </div>

      <div className="replies-container">
        
        <div className="replies-list-container">
        <h4 className="replies-box-header"><em>Replies</em></h4>
        { !renderedReplies ? null : 
          renderedReplies.map(reply => {
            return <ReplyCard reply={reply} key={reply.id}/>
          })
        }
        <div ref={repliesEnd} className="bottom-of-replies" />
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