import React from "react"

function CatCard(props) {
  return (
    <div onClick={props.onClick}>
      <div>
        <h4 className="cats">{props.category}</h4>
      </div>
    </div>
  )
}

export default CatCard
