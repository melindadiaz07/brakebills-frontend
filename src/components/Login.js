import React from 'react';
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleLoginSubmit = (e) => {
    e.preventDefault()

   fetch("http://localhost:3000/api/v1/login", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify({username: this.state.username, password: this.state.password})
   })
   .then(res => res.json())
   .then(data => {
    
    if(data.authenticated) {
      console.log(data)
      localStorage.setItem("token", data.token)
      this.props.getCurrentUser(data.user)
      this.props.logIn()
      

    } else {
      console.log(data);
      }
    })
  };

  render(){

    return(
      <div className="login-form-container">



    <h2>Log in to your University account: </h2>

    <form>
      <label>Username: </label><br></br>
      <input onChange={this.handleChange} name="username" placeholder=" email" value={this.state.username}/>
      <br></br><br></br>
      <label>Password: </label><br></br>
      <input onChange={this.handleChange} name="password" type="password" placeholder=" password" value={this.state.password}/>

      <br></br><br></br>
    <button onClick={this.handleLoginSubmit}>Login</button>

    </form>
  
  
</div>
    )
  }
}

export default Login;