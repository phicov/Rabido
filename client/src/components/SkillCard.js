import React from "react"
import freelancer from "../assets/freelancer.jpeg"

function SkillCard(props) {
  return (
    <div className="skill-card-container">
      <div className="skill-card" onClick={props.onClick}>
        <img className="skill-pic" src={freelancer}></img>
        <div className="skill-background">
          <p className="skills">{props.name} </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
