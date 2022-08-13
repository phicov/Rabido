import React from "react"

function SkillCard(props) {
  return (
    <div onClick={props.onClick}>
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default SkillCard
