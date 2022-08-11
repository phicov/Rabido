import React from "react"
import { Link } from "react-router-dom"

function Profile(props) {
  return (
    <div>
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
      <h1>Profile</h1>
        <div className="profileContainer">
          <div className="profileForm">

          </div>

        </div>
    </div>
  )
}

export default Profile
