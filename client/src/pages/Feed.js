import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowDownUp } from 'react-icons/bs'
import axios from 'axios'

const URL = 'http://localhost:3001'

function Feed(props) {
  let navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [sort, setSort] = useState('ASC')

  useEffect(() => {
    getProfiles()
  }, [])

  const getProfiles = async () => {
    const res = await axios.get(`${URL}/api/profiles/get-profiles`)
    console.log(res.data)
    setProfiles(res.data)
  }

  const switchSort = (e) => {
    sort === 'ASC' ? setSort('DESC') : setSort('ASC')
  }

  const sortASC = (
    <div>
      <h1>Feed</h1>

      <h3>{profiles.length} profiles found</h3>

      <h4 onClick={switchSort}>Sort {BsArrowDownUp}</h4>

      <div>
        {profiles
          .slice(0)
          .reverse()
          .map((profile) => (
            <div key={profile.id}>
              <img src={profile.image} alt="post-content" />
              <h4>Name: {profile.name}</h4>
              <h5>Contact: {profile.contact}</h5>
              <h5>City: {profile.city}</h5>
              <h5>About: {profile.about}</h5>
              <h5>Rate: {profile.rate}</h5>
              <h5>Projects: {profile.projects}</h5>
              <h5>Skill: {profile.Skill.name}</h5>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  )

  const sortDESC = (
    <div>
      <h1>Feed</h1>

      <h3>{profiles.length} profiles found</h3>

      <h4 onClick={switchSort}>Sort {BsArrowDownUp}</h4>
      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <img src={profile.image} alt="post-content" />
            <h4>Name: {profile.name}</h4>
            <h5>Contact: {profile.contact}</h5>
            <h5>City: {profile.city}</h5>
            <h5>About: {profile.about}</h5>
            <h5>Rate: {profile.rate}</h5>
            <h5>Projects: {profile.projects}</h5>
            <h5>Skill: {profile.Skill.name}</h5>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  )

  return <div>{sort === 'ASC' ? sortASC : sortDESC}</div>
}

export default Feed
