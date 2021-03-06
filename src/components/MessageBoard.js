import React, { useEffect, useState, useRef } from 'react';
import PostCard from './PostCard'
import PostForm from './PostForm'
import ReplyCard from './ReplyCard'
import ReplyForm from './ReplyForm'



const MessageBoard = (props) => {

  const [posts, setPosts] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [renderedReplies, setRenderedReplies] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [admin, setAdmin] = useState(false)


  const messagesEnd = useRef()
  const repliesEnd = useRef()


  useEffect(() => {
    if (props.currentUser["admin?"] === true){
      setAdmin(true)
    }
   }, [])


  const handleClick = (event, post) => {
    if (selectedPost !== null) {
      console.log(event.target)
      let previousEl = document.getElementById(selectedPost.id)
      previousEl.className="single-post-container" 
    }
  setSelectedPost(post)
    event.target.parentElement.className="single-post-selected"
    if (post.replies !== null) {
      let sortedReplies = post.replies.sort((a, b) => (a.id > b.id) ? 1 : -1)
      setRenderedReplies(sortedReplies)
      scrollToBottomReplies()
    } 
  }

  const resetSelectedOnDelete = () => {
    setSelectedPost(null)
    setRenderedReplies(null)
  }

  const exitReplies = () => {
    if(selectedPost !== null){
    let previousEl = document.getElementById(selectedPost.id)
      previousEl.className="single-post-container" 
      setRenderedReplies(null)
      setSelectedPost(null)
      getPosts()
    } else {
      setRenderedReplies([])
      setSelectedPost(null)
      getPosts()
    }
  }

  let getPosts = () => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(postsData => {
      let sortedPosts = postsData.sort((a, b) => (a.id > b.id) ? 1 : -1)
      setPosts(sortedPosts)
      setFilteredPosts(sortedPosts)
      if(!selectedPost){
      scrollToBottomPosts()
      }
    })
  }

  useEffect(getPosts, [])

  const rerenderReplies = (reply) => {
      let index = renderedReplies.indexOf(reply)
      let newRepliesArray = [...renderedReplies]
      newRepliesArray.splice(index, 1)
      setRenderedReplies([...newRepliesArray])
      getPosts()
    }
  

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
      body: JSON.stringify({title: title, category: category, content: content, user_id: props.currentUser.id})
    })
    .then(res => res.json())
    .then(post => getPosts())
    // getPosts()
    scrollToBottomPosts()
  }

  let handleReplySubmit = (event, content) => {
    event.preventDefault()
    fetch("http://localhost:3000/replies", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({replier: props.currentUser.username, content: content, post_id: selectedPost.id})
    })
    .then(res => res.json())
    .then(newReply => {
      setRenderedReplies([...renderedReplies, newReply])
      scrollToBottomReplies()
          fetch("http://localhost:3000/posts")
          .then(res => res.json())
          .then(postsData => {
          setPosts(postsData)
          setFilteredPosts(postsData)
      })
    })
  }

  const updateCategory = (event) => {
    event.preventDefault()
    let filter = (event.target.value)
    filterByCategory(filter)
    setSelectedPost(null)
    setRenderedReplies([])
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
    <div className="message-board-page">

      <div className="filter-div"> 
      <label>Category: </label><br />
          <select onChange={(event) => updateCategory(event)} name="catgory" className="filter-category">
          <option  value="All" >All</option>
            <option  value="Misc" >Misc</option>
            <option  value="Lost and Found" >Lost and Found</option>
            <option  value="Warnings">Warnings</option>
            <option  value="Jobs">Jobs</option>
            <option  value="Events">Events</option>
          </select><br/>
      </div>
    <div className="message-board-container">

      <div className="posts-container">
        { !filteredPosts ? null : filteredPosts.map(post => {
          return <PostCard post={post} key={post.id} handleClick={handleClick} admin={admin} getPosts={getPosts} exitReplies={exitReplies} resetOnDelete={resetSelectedOnDelete}/>
        })}
        <div ref={messagesEnd} className="bottom-of-messages" />
      </div>

      <div className="replies-container">
        <button onClick={exitReplies} className="exit-replies"> x </button>
        <div className="replies-list-container">
        <h4 className="replies-box-header"><em>Replies</em></h4>
        { !renderedReplies ? null : 
          renderedReplies.map(reply => {
            return <ReplyCard reply={reply} key={reply.id} admin={admin} rerenderReplies={rerenderReplies} />
          })
        }
        <div ref={repliesEnd} className="bottom-of-replies" />
        </div>
        { !selectedPost  ? null : 
        <div className="reply-form-container">
          <ReplyForm handleSubmit={handleReplySubmit} replyTo={selectedPost.user.username} currentUser={props.currentUser} />
        </div> }
      </div> 

      <div className="post-form-container">
         <PostForm handleSubmit={handlePostSubmit} currentUser={props.currentUser} />
       </div>

      </div>
    </div>
  )
}

export default MessageBoard;