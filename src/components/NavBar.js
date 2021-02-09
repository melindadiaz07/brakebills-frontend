
import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import logo from '../images/goldlogo2.png'


const NavBar = ({logged_in, getCurrentUser, logOut, logIn, location: { pathname } }) => {

  let logout = () => {
    localStorage.clear()
    getCurrentUser(null)
  };

  const history = useHistory()

  let redirectHome = () => {
      history.push('/home')
  }


  return (
    <div>
      
    <Menu pointing secondary>
    <div className="nav-logo"><img src={logo} /></div>
    {!logged_in ? (
      <Fragment>
        
        <Menu.Item
            as={NavLink}
            to="/home"
            name="Home"
            active={pathname === "/home"}
          />
        <Menu.Item
          as={NavLink}
          to="/about"
          name="About"
          active={pathname === "/about"}
        />
        <Menu.Item
          as={NavLink}
          to="/admissions"
          name="Admissions"
          active={pathname === "/admissions"}
        />
         <Menu.Item
          as={NavLink}
          to="/academics"
          name="Academics"
          active={pathname === "/academics"}
        />
         <Menu.Item
          as={NavLink}
          to="/faculty"
          name="Faculty"
          active={pathname === "/faculty"}
        />
        <Menu.Menu position="right">
        {/* <Menu.Item to="/login" name="Login" onClick={() => {
            logIn()
              }
            } /> */}
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
        
        </Menu.Menu>
        
      </Fragment>
    ) : (
    <Fragment>
      <Menu.Item
            as={NavLink}
            to="/home"
            name="Home"
            active={pathname === "/home"}
          />
      <Menu.Item
          as={NavLink}
          to="/about"
          name="About"
          active={pathname === "/about"}
        />
        <Menu.Item
          as={NavLink}
          to="/admissions"
          name="Admissions"
          active={pathname === "/admissions"}
        />
         <Menu.Item
          as={NavLink}
          to="/academics"
          name="Academics"
          active={pathname === "/academics"}
        />
        <Menu.Item
          as={NavLink}
          to="/faculty"
          name="Faculty"
          active={pathname === "/faculty"}
        />
        <Menu.Menu position="right">
        <Menu.Item
          as={NavLink}
          to="/messageboard"
          name="Campus MessageBoard"
          active={pathname === "/messageboard"}
        />
          <Menu.Item to="/logout" name="Logout" onClick={() => {
            logOut()
            redirectHome()
              }
            } />
        </Menu.Menu>
    </Fragment>
    )}
  </Menu></div>
  )
}

export default withRouter(NavBar)
