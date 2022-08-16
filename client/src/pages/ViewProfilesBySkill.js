import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"

const URL = "http://localhost:3001"

function ViewProfilesBySkill(props) {
  const [profiles, setProfiles] = useState([])

  let { skillId } = useParams()
  let navigate = useNavigate()

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
    <div>
      <div>
        <Link className="link" to="/categories">
          Back To Categories
        </Link>
        {profiles
          .slice(0)
          .reverse()
          .map((profile) => (
            <ProfileCard
              key={profile.id}
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
