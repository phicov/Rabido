import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import SkillCard from "../components/SkillCard"

const URL = "http://localhost:3001"

function ViewSkillsByCat(props) {
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
      <h1>Skills</h1>
      <section>
        <Link className="link" to="/categories">
          Back To Categories
        </Link>
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

export default ViewSkillsByCat
