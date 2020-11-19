import React from 'react';
import PostCard from './PostCard'
import PostForm from './PostForm'

const MessageBoard = () => {

  return(
    <div>
      Message Board
      <PostCard />
      <PostForm />
    </div>
  )
}

export default MessageBoard;