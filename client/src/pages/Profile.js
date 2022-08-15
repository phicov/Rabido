import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Profile({ user }) {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    image: '',
    city: user.city,
    about: '',
    contact: user.email,
    rate: '',
    projects: '',
    skillId: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      name: formValues.name,
      image: formValues.image,
      city: user.city,
      about: formValues.about,
      contact: user.email,
      rate: formValues.rate,
      projects: formValues.projects,
      skillId: formValues.skillId
    }

    await axios.post(`${URL}/api/profiles/new-profile`, data)

    setFormValues({
      username: '',
      email: '',
      password: '',
      city: '',
      isHunter: false
    })
    navigate('/profile')
  }

  if (user.profileId != null) {
    return (
      <div>
        <div className="profileContainer">
          <div className="profileForm">
            <img
              className="profilePic"
              src="https://i.pinimg.com/280x280_RS/af/9d/d5/af9dd5f2d044b2f9c3c1521f8973c5a8.jpg"
            />
            <h1 className="realName">John Doe</h1>
            <p className="userName">Username</p>
            <h3 className="contact">Contact</h3>
            <h3 className="rates">Rates</h3>
            <h3 className="skills">Skills</h3>
            <h3 className="location">Location</h3>
            <h3 className="about">About</h3>
            <div className="projectsContainer">
              <div className="projectBox"></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Make Profile Form Here</h2>

        <form className="profile-form" onSubmit={handleSubmit}>
          <h1>Create Profile</h1>
          <hr></hr>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Profile Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="Image URL"
              value={formValues.image}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="city"
              type="text"
              placeholder="City"
              value={formValues.city}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="about"
              type="text"
              placeholder="About"
              value={formValues.about}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="contact"
              type="text"
              placeholder="Email for Contact"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="rate"
              type="text"
              placeholder="Rate"
              value={formValues.rate}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="projects"
              type="text"
              placeholder="Previous Projects"
              value={formValues.projects}
              required
            />
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="skill"
                type="text"
                placeholder="Skill"
                value={formValues.skillId}
                required
              />
            </div>
          </div>
          <button className="create-profile-btn" disabled={!formValues.name}>
            Create Profile
          </button>
          <hr></hr>
        </form>
      </div>
    )
  }
}

export default Profile
