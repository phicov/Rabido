import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetProfiles } from "../services/ProfileServices"
import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"
import axios from "axios"

const URL = "http://localhost:3001"

function Feed(props) {
  let navigate = useNavigate()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    getProfiles()
  }, [])

  const getProfiles = async () => {
    const res = await axios.get(`${URL}/api/profiles/get-profiles`)
    console.log(res)
    setProfiles(res.data)
  }
  return (
    <div>
      <h1>Feed</h1>

      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <img src={profile.image} alt="post-content" />
            <h4>Name: {profile.name}</h4>
            <h5>Contact: {profile.contact}</h5>
            <h5>City: {profile.city}</h5>
            <h5>About: {profile.about}</h5>
            <h5>Rate: {profile.rate}</h5>
            <h5>Projects: {profile.projects}</h5>
            <h5>Skill: {profile.Skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
