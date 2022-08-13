import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const URL = "http://localhost:3001"

function ViewSkills(props) {
  const [skills, setSkills] = useState([])

  let { skillId } = useParams()
  //   let navigate = useNavigate()

  useEffect(() => {
    getSkills()
  }, [])

  const getSkills = async () => {
    const res = await axios.get(`${URL}/api/skills/get-skill/${skillId}`)
    console.log(res.data)
    console.log(res.data.skill.name)
    setSkills(res.data.skill.name)
  }

  //   const getProfile = (profile) => {
  //     navigate(`/skills/profile${profile.id}`)
  //   }

  return (
    <div>
      <nav>
        <Link className="link" to="/feed">
          Feed
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
        <Link className="link" to="/">
          Sign Out
        </Link>
      </nav>
      <h1>Skills</h1>
      <div>
        {/* {skills.map((s) => (
          <div key={s.id}>
            <h5>Skill: {s}</h5>
          </div>
        ))} */}
        <h1>{skills}</h1>
      </div>
    </div>
  )
}

export default ViewSkills
