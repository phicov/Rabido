import './ViewProfilesBySkill.css'
import React from 'react'
import axios from 'axios'
import ProfileCard from '../components/ProfileCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3001'

function ViewProfilesBySkill(props) {
  const [profiles, setProfiles] = useState([])

  let { skillId } = useParams()

  useEffect(() => {
    getProfiles()
  }, [])

  const getProfiles = async () => {
    const res = await axios.get(`${URL}/api/profiles/get-profiles/${skillId}`)
    console.log(res.data)
    console.log(res.data.profiles.Profiles)
    setProfiles(res.data.profiles.Profiles)
  }

  return (
    <div className="ViewProfilesBySkillPage">
      <div className="cat-link">
        <Link className="cat-link" to="/categories">
          Back To Categories
        </Link>
      </div>
      <div className="ViewProfilesBySkillContainer">
        {profiles
          .slice(0)
          .reverse()
          .map((profile) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              image={profile.image}
              city={profile.city}
              about={profile.about}
              contact={profile.contact}
              rate={profile.rate}
              projects={profile.projects}
            />
          ))}
      </div>
    </div>
  )
}

export default ViewProfilesBySkill
