import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "25px",
      display: "flex",
      justifyContent: "space-between"
    };
  };

  return (
    <div>
      <div className="header">
        <NavLink style={navLinkStyles} to={'/'}>Home</NavLink>

        <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>

        <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>



        {/* <Link to={'/about'}> <h1 style={{ color: "white" }}>About</h1></Link>
        <Link to={'/contact'}> <h1 style={{ color: "white" }}>Contact</h1></Link> */}


        {/* <Link  to = {'/error'}> <h1 style={{color: "white"}}>Error</h1></Link> */}
      </div>
    </div>
  )
}

export default Header
