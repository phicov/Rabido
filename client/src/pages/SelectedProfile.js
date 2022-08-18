import Modal from '../components/Modal'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const URL = 'http://localhost:3001'

const SelectedProfile = () => {
  let { profileId } = useParams()

  const [profileData, setProfileData] = useState([])
  const [profileSkill, setProfileSkill] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getProfile = async () => {
      let res = await axios.get(`${URL}/api/profiles/${profileId}`)
      console.log(res.data)
      setProfileData(res.data)
      setProfileSkill(res.data.Skill)
    }
    getProfile()
  }, [])

  const loading = <h3> Loading ... </h3>

  const selectedProfile = (
    <div>
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

  return <div>{profileData != [] ? selectedProfile : loading}</div>
}

export default SelectedProfile
