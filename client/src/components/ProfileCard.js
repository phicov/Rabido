import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProfileCard(props) {
  let navigate = useNavigate()

  return (
    <div
      className="ProfileCard"
      onClick={() => {
        navigate(`/view-profile/${props.id}`)
      }}
    >
      <img src={props.image} alt="profile-content" />
      <div className="ProfileContact">
        <h4>{props.name}</h4>
        <h5>About: {props.about}</h5>
        <h5>Projects: {props.projects}</h5>
        <h5>City: {props.city}</h5>
        <h5>Contact: {props.contact}</h5>
      </div>
      <div className="ProfileRate">
        <h5>Rate: {props.rate}/hr</h5>
      </div>
    </div>
  )
}

export default ProfileCard
