import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <div className="header">
       <Link to = {'/'}> <h1 style={{color: "whie"}}>Home</h1></Link>
       <Link  to = {'/about'}> <h1 style={{color: "whie"}}>About</h1></Link>
       <Link  to = {'/contact'}> <h1 style={{color: "whie"}}>Contact</h1></Link>
      </div>
    </div>
  )
}

export default Header
