import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'

const URL = 'http://localhost:3001'

function Profile({ user, skills }) {
  console.log(user)
  console.log(skills)
  let navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [profileData, setProfileData] = useState([])
  const [profileSkill, setProfileSkill] = useState([])
  const [toggleProfile, setToggleProfile] = useState(0)
  const [formValues, setFormValues] = useState({
    name: '',
    image: '',
    city: user && user.city,
    about: '',
    contact: user && user.email,
    rate: '',
    projects: '',
    skillId: ''
  })

  const getUsersProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${user.profileId}`)
    console.log(res.data)
    setProfileData(res.data)
  }

  const updateUser = async (newProfileId) => {
    const update = await axios
      .put(`${URL}/api/users/${user.id}`, { profileId: newProfileId })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  const getProfSkill = async () => {
    const res = await axios.get(`${URL}/api/profiles/${user.profileId}`)
    console.log(res.data.Skill)
    setProfileSkill(res.data.Skill)
  }

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
      projects: '',
      skillId: ''
    })

    navigate(0)
  }

  if (!user) {
    return <div>Loading</div>
  }
  if (user.profileId != null && toggleProfile == 0) {
    getUsersProfile()
    getProfSkill()
    setToggleProfile(1)
  } else if (user.profileId != null && toggleProfile == 1) {
    return (
      <div>
        <Link className="update-prof" to="/update-profile">
          Update Profile
        </Link>
        <body className="profileBody">
          <div className="profileContainer">
            <nav className="profileNav">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </nav>
            <section className="about" id="about">
              <div className="aboutForm">
                <div className="aboutItems">
                  <div className="about-card">
                    <h3 className="realName">Name: {profileData.name}</h3>
                    <h3 className="profskill">Skills: {profileSkill.name}</h3>
                    <h3 className="location">City: {profileData.city}</h3>
                    <h3 className="contact">Contact: {profileData.contact}</h3>
                    <h3 className="rates">Rate: {profileData.rate}/hr</h3>
                  </div>
                </div>
                <hr></hr>
                <img className="profilePic" src={profileData.image}></img>
                <h3 className="profileAbout">About: {profileData.about}</h3>
              </div>
              <div className="profilePreview">
                <div className="previewForm">
                  <h2 className="memo">I will ...</h2>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" />
                </div>
              </div>
            </section>
            <section className="projects" id="projects">
              <div className="projectsContainer">
                <div className="projectItem">
                  <h3>project card 1</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 1</p>
                </div>
                <div className="projectItem">
                  <h3>project card 2</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 2</p>
                </div>
                <div className="projectItem">
                  <h3>project card 3</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 3</p>
                </div>
                <div className="projectItem">
                  <h3>project card 4</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 4</p>
                </div>
                <div className="projectItem">
                  <h3>project card 5</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 5</p>
                </div>
                <div className="projectItem">
                  <h3>project card 6</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 6</p>
                </div>
                <div className="projectItem">
                  <h3>project card 6</h3>
                  <hr></hr>
                  <img src="https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png" />
                  <p>description 6</p>
                </div>

                <button onClick={() => setIsOpen(true)} className="projectItem">
                  <h3>Add Project</h3>
                  <hr></hr>
                  <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" />
                </button>
              </div>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
            </section>

            <section className="settings" id="settings"></section>
          </div>
        </body>
      </div>
    )
  } else {
    return (
      <div className="createProfileBody">
        <form className="profile-form profileCreate" onSubmit={handleSubmit}>
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
              placeholder="Profile Picture URL"
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
          <div className="input-wrapper inputUpdate">
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
              placeholder="Hourly Rate"
              value={formValues.rate}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="projects"
              type="text"
              placeholder="Last Projects"
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
            Create Profile
          </button>
          <hr></hr>
        </form>
      </div>
    )
  }
}

export default Profile
