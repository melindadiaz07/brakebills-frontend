import React from 'react';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = async () => {
    const {username, password} = this.state 

    const credentials = {username, password}

    const reqPackage = {}
      reqPackage.headers = {"Content-Type": "application/json"}
      reqPackage.method = "POST"
      reqPackage.body = JSON.stringify(credentials)

    const res = await fetch(`http://localhost:3000/api/v1/login`, reqPackage)
    const data = await res.json()
    
    if(data.authenticated) {
      console.log(data)
      
      localStorage.setItem("token", data.token)

      this.props.getCurrentUser(data.user)
    } else {
      console.log(data);
    }
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
      <input onChange={this.handleChange} name="password" placeholder=" password" value={this.state.password}/>

      <br></br><br></br>
    <button onClick={this.handleLoginSubmit}>Login</button>

    </form>
  
  
</div>
    )
  }
}

export default Login;