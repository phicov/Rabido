import React from "react"

function CatCard(props) {
  return (
    <div onClick={props.onClick}>
      <div>
        <h3>{props.category}</h3>
      </div>
    </div>
  )
}

export default CatCard
