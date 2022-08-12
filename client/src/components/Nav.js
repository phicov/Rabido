import React from "react"
import { Link } from "react-router-dom"
import 'boxicons'

function Nav(props) {
  return (
    <nav className="nav bg-grid">
      <div className="nav_toggle">
      <Link className="link bx bx-menu" to="/feed">
        Feed
      </Link>
      <Link className="link" to="/categories">
        Categories
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/">
        Sign Out
      </Link>
      </div>
    </nav>
    
  )
}

export default Nav
