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

        <div className="profileContainer">
          <div className="profileForm">
              <img className="profilePic" src="https://i.pinimg.com/280x280_RS/af/9d/d5/af9dd5f2d044b2f9c3c1521f8973c5a8.jpg"/>
              <h2 className="realName">John Doe</h2>
              <p className="userName">Username</p>
              <hr className="line1"></hr>
              <h3 className="contact">Contact</h3>
              <h3 className="rates">Rates</h3>
              <h3 className="skills">Skills</h3>
              <h3 className="location">Location</h3>
              <h5 className="about">About</h5>
              <div className="projectsContainer">
                <div className="projectBox">
                </div>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Profile
