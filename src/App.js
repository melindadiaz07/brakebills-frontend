import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Admissions from './components/Admissions'
import About from './components/About'
import Departments from './components/Departments'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Faculty from './components/Faculty'
import MessageBoard from './components/MessageBoard'
import React, { useEffect, useState } from 'react'



const  App = () => {

  const [logged_in, setLogged_in] = useState(false)
  const [currentUser, setCurrentuser] = useState(null)


  let logOut = () => {
    setLogged_in(false)
  }

  let logIn = () => {
    setLogged_in(true)
  }




  return (
    <div className="App">
    
    <div id="nav-container">
    <NavBar logged_in={logged_in} logOut={logOut} logIn={logIn} />
    </div>

    <Switch>

      <Route exact path="/" render={() => <Redirect to="/home" />} />

      <Route exact path='/home' render={()=> {
        return <Home logged_in={logged_in}/>
      }} />

      <Route exact path='/about' render={()=> {
        return <About logged_in={logged_in}/>
      }} />

      <Route exact path='/admissions' render={()=> {
        return <Admissions logged_in={logged_in}/>
      }} />

      <Route exact path='/academics' render={()=> {
        return <Departments logged_in={logged_in}/>
      }} />

      <Route exact path='/faculty' render={()=> {
        return <Faculty logged_in={logged_in}/>
      }} />

      
      <Route exact path='/login' render={()=> {
        return <Login logged_in={logged_in} logIn={logIn}/>
      }} />

      <Route exact path='/messageboard' render={()=> {
        return <MessageBoard logged_in={logged_in}/>
      }} />


    </Switch>

    </div>
  );
}

export default App;
