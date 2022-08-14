import React from "react"

function ProfileCard(props) {
  return (
    <div onClick={props.onClick}>
      <div>
        <img src={props.image}></img>
        <h3>Name: {props.name}</h3>
        <h3> City: {props.city}</h3>
        <h3>About: {props.about}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Rate: {props.rate}</h3>
        <h3>Projects: {props.projects}</h3>
      </div>
    </div>
  )
}

export default ProfileCard
