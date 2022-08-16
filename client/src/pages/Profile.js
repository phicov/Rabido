import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3001'

function Profile({ user, skills }) {
  let navigate = useNavigate()

  const [toggleProfile, setToggleProfile] = useState(0)

  const [formValues, setFormValues] = useState({
    name: '',
    image: '',
    city: user && user.city,
    about: '',
    contact: user && user.email,
    rate: '',
    projects: ''
    // skillId: "",
  })

  const [profileData, setProfileData] = useState([])

  const getUsersProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${user.profileId}`)
    console.log(res.data)
    setProfileData(res.data)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const updateUser = async (newProfileId) => {
    const update = await axios
      .put(`${URL}/api/users/${user.id}`, { profileId: newProfileId })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
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
      projects: formValues.projects
      // skillId: formValues.skillId,
    }

    const newProfile = await axios
      .post(`${URL}/api/profiles/new-profile`, data)
      .then((res) => {
        console.log(res.data.id)
        updateUser(res.data.id)
      })

    setFormValues({
      name: '',
      image: '',
      city: user.city,
      about: '',
      contact: user.email,
      rate: '',
      projects: ''
    })

    navigate(0)
  }

  if (!user) {
    return <div>Loading</div>
  }
  if (user.profileId != null && toggleProfile == 0) {
    getUsersProfile()
    setToggleProfile(1)
  } else if (user.profileId != null && toggleProfile == 1) {
    console.log(skills)
    return (
      <div>
        <div className="profileContainer">
          <div className="profileForm">
            <img className="profileName" src={profileData.image}></img>
            <h1 className="realName">Name: {profileData.name}</h1>
            <h3 className="contact">Contact: {profileData.contact}</h3>
            <h3 className="rates">Rate: {profileData.rate}</h3>
            {/* <h3 className="skills">Skill: {profileData.Skill.name}</h3> */}
            <h3 className="location">Location: {profileData.city}</h3>
            <h3 className="about">About: {profileData.about}</h3>
            <div className="projectsContainer">
              Projects: {profileData.projects}
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
              name="city"
              type="text"
              placeholder="City"
              value={formValues.city}
              readonly
            />
          </div>
          <div className="input-wrapper">
            <textarea
              onChange={handleChange}
              name="about"
              placeholder="About"
              value={formValues.about}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              name="contact"
              type="text"
              placeholder="Email for Contact"
              value={formValues.contact}
              readonly
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
            <select>
              {skills.map((skill) => (
                <option value={skill.name}>{skill.name}</option>
              ))}
            </select>
            {/* <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="skill"
                type="text"
                placeholder="Skill"
                dropdown = ...skills
                value={formValues.skillId}
                required
              />
            </div> */}
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
