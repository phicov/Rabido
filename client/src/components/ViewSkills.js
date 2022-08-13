import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import SkillCard from "./SkillCard"

const URL = "http://localhost:3001"

function ViewSkills(props) {
  const [skills, setSkills] = useState([])

  let { categoryId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    getSkills()
  }, [])

  const getSkills = async () => {
    const res = await axios.get(`${URL}/api/skills/get-skills/${categoryId}`)
    console.log(res.data)
    console.log(res.data.category.Skills)
    setSkills(res.data.category.Skills)
  }

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
      <section>
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            onClick={() => {
              navigate(`/get-profiles/${skill.id}`)
            }}
            name={skill.name}
          />
        ))}
      </section>
    </div>
  )
}

export default ViewSkills
