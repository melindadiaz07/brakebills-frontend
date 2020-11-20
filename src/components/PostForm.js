import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'



const PostForm = (props) => {

  const [postContent, setPostContent] = useState("")
  const [category, setCategory] = useState("Misc")
  
  const updatePostContent = (event) => {
    event.preventDefault()
    setPostContent(event.target.value)
  }

  const updateCategory = (event) => {
    event.preventDefault()
    setCategory(event.target.value)
  }

  const clearForm = () => {
    setPostContent("")
  }

  return(
    <div>
      <form className="post-form" onSubmit={(event)=> {
        props.handleSubmit(event, category, postContent)
        clearForm()
        }} >
        <textarea  onChange={(event) => updatePostContent(event)} placeholder="Post Content" value={postContent} resize="none" />
      <div className="post-form-dropdown">
        <label>Category </label><br />
          <select onChange={updateCategory} name="catgory" id="post-category">
            <option  value="Misc" >Misc</option>
            <option  value="Lost and Found" >Lost and Found</option>
            <option  value="Housing">Housing</option>
            <option  value="Sports">Sports</option>
            <option  value="Events">Events</option>
          </select><br/>
          <button type="submit" className="post-submit-btn" >Submit</button>
          
          </div>
      </form>
    </div>
  )
}

export default PostForm
