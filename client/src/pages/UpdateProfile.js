import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3001"

function UpdateProfile({ user, skills }) {
  let navigate = useNavigate()

  const [profileData, setProfileData] = useState([])
  const [profileSkill, setProfileSkill] = useState([])
  const [toggleProfile, setToggleProfile] = useState(0)
  const [formValues, setFormValues] = useState({
    name: "",
    image: "",
    city: "",
    about: "",
    contact: "",
    rate: "",
    projects: "",
    skillId: "",
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
      .put(`${URL}/api/profiles/${user.profileId}`, { data })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
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
      skillId: formValues.skillId,
    }

    console.log(data)
    updateProfile(data)

    setFormValues({
      name: "",
      image: "",
      city: "",
      about: "",
      contact: "",
      rate: "",
      projects: "",
      skillId: "",
    })

    // navigate("/profile")
  }
  if (user.profileId != null && toggleProfile == 0) {
    getUsersProfile()
    setToggleProfile(1)
  } else if (user.profileId != null && toggleProfile == 1)
    return (
      <div>
        <div>
          <h1>Update Profile</h1>
          <form className="profile-form" onSubmit={handleSubmit}>
            <hr></hr>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder={profName}
                value={formValues.name}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="image"
                type="text"
                placeholder={profImg}
                value={formValues.image}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="city"
                type="text"
                placeholder={profCity}
                value={formValues.city}
                required
              />
            </div>
            <div className="input-wrapper">
              <textarea
                onChange={handleChange}
                name="about"
                placeholder={profAbout}
                value={formValues.about}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="Email"
                value={formValues.contact}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="rate"
                type="text"
                placeholder={profRate}
                value={formValues.rate}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="projects"
                type="text"
                placeholder={profProj}
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
            <button className="create-profile-btn" disabled={!formValues.name}>
              Update
            </button>
            <h2></h2>
            <hr></hr>
          </form>
        </div>
      </div>
    )
}

export default UpdateProfile
