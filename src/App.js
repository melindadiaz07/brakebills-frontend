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
import React, { useState } from 'react'



function App() {

  const [logged_in, setLogged_in] = useState(true)

  let logOut = () => {
    setLogged_in(false)
  }

  return (
    <div className="App">
    
    <NavBar logged_in={logged_in} logOut={logOut} />

    <Switch>

      <Route exact path="/" render={() => <Redirect to="/home" />} />

      <Route exact path='/home' render={()=> {
        return <Home />
      }} />

      <Route exact path='/about' render={()=> {
        return <About />
      }} />

      <Route exact path='/admissions' render={()=> {
        return <Admissions />
      }} />

      <Route exact path='/academics' render={()=> {
        return <Departments />
      }} />

      <Route exact path='/faculty' render={()=> {
        return <Faculty />
      }} />

      
      <Route exact path='/login' render={()=> {
        return <Login />
      }} />

      <Route exact path='/messageboard' render={()=> {
        return <MessageBoard />
      }} />




    </Switch>
    

    </div>
  );
}

export default App;
