import React from "react"
import { Link } from "react-router-dom"
import Nav from "../components/Nav"

function Profile(props) {
  return (
    <div>
          <div className="profileNav">
            <div className="profNavAbout">About</div>
            <div classname="profNavSkills">Skills</div>
            <div className="profNavProjects">projects</div>
          </div>

        <div className="profileContainer">
          <div className="profAboutPage">
            <div className="profile-pic"><img className="profilePic" 
                src="https://i.pinimg.com/280x280_RS/af/9d/d5/af9dd5f2d044b2f9c3c1521f8973c5a8.jpg"/></div>
            <div className="profileName"><h1 >John Doe</h1></div>

            <div className="aboutThings">
              <div className="contact"><h3>Contact</h3></div>    
              <div className="location"><h3>Location</h3></div> 
              <div className="rates"><h3>Rates</h3></div>
            </div>
          </div>
          <div className="about"><h3>About</h3></div>

            <div className="skillPage"><h1>Skills</h1></div>
            
            <div className="projectsContainer">
            <div className="projectBox">Projects</div> </div>
        </div>
      </div>

  )
}

export default Profile