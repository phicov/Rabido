import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav(props) {
  return (
    <nav>
      <Link className="link" to="/feed">
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
    </nav>
  )
}

export default Nav
