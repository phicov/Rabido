import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { confirm } from 'react-confirm-box'

const URL = 'http://localhost:3001'

function UpdateProfile({ user, skills, handleLogOut }) {
  let navigate = useNavigate()

  const [profileData, setProfileData] = useState([])
  const [toggleProfile, setToggleProfile] = useState(0)
  const [formValues, setFormValues] = useState({
    name: '',
    image: '',
    city: '',
    about: '',
    contact: '',
    rate: '',
    projects: '',
    skillId: ''
  })

  let profName = profileData.name
  let profImg = profileData.image
  let profCity = profileData.city
  let profAbout = profileData.about
  let profContact = profileData.contact
  let profRate = profileData.rate
  let profProj = profileData.projects

  const getUsersProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${user.profileId}`)
    console.log(res.data)
    setProfileData(res.data)
  }

  const updateProfile = async (data) => {
    const res = await axios
      .put(`${URL}/api/profiles/${user.profileId}`, {
        name: data.name,
        image: data.image,
        city: data.city,
        about: data.about,
        contact: data.contact,
        rate: data.rate,
        projects: data.projects,
        skillId: data.skillId
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  const deleteProfile = async () => {
    const confirmDelete = await confirm(
      'Are you sure you want to delete your profile?'
    )
    if (confirmDelete) {
      console.log('user clicked yes')
      const res = await axios
        .delete(`${URL}/api/profiles/${user.profileId}`)
        .then((res) => {
          console.log(res)
          handleLogOut()
          navigate('/')
        })
    } else {
      console.log('user clicked no')
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      name: formValues.name,
      image: formValues.image,
      city: formValues.city,
      about: formValues.about,
      contact: formValues.contact,
      rate: formValues.rate,
      projects: formValues.projects,
      skillId: formValues.skillId
    }

    console.log(data)
    updateProfile(data)

    setFormValues({
      name: '',
      image: '',
      city: '',
      about: '',
      contact: '',
      rate: '',
      projects: '',
      skillId: ''
    })

    navigate('/profile')
  }
  if (user.profileId != null && toggleProfile == 0) {
    getUsersProfile()
    setToggleProfile(1)
  } else if (user.profileId != null && toggleProfile == 1) {
  } else {
    setToggleProfile(0)
  }
  return (
    <div className="updateProfileBody">
      <div>
        <form className="profile-form updateProfile" onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <hr></hr>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="Profile Picture URL"
              value={formValues.image}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="city"
              type="text"
              placeholder="City"
              value={formValues.city}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <textarea
              onChange={handleChange}
              name="about"
              placeholder="About Me"
              value={formValues.about}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="contact"
              type="text"
              placeholder="Contact Email"
              value={formValues.contact}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="rate"
              type="text"
              placeholder="Hourly Rate"
              value={formValues.rate}
              required
            />
          </div>
          <div className="input-wrapper inputUpdate">
            <input
              onChange={handleChange}
              name="projects"
              type="text"
              placeholder="Latest Project"
              value={formValues.projects}
              required
            />
            <select
              defaultValue={formValues.skillId}
              onChange={handleChange}
              name="skillId"
              required
            >
              <option value="" disabled hidden>
                Select Skill
              </option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.id}. {skill.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className="create-profile-btn inputUpdate"
            disabled={!formValues.name}
          >
            Update Profile
          </button>
          <h2></h2>
          <hr></hr>
          <button className="deleteProfButton" onClick={deleteProfile}>
            Delete Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
