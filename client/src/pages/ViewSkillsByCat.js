import React from 'react'
import axios from 'axios'
import SkillCard from '../components/SkillCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3001'

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
      <div className="cat-link">
        <Link className="cat-link" to="/categories">
          Back To Categories
        </Link>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            onClick={() => {
              navigate(`/get-profiles/${skill.id}`)
            }}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  )
}

export default ViewSkillsByCat
