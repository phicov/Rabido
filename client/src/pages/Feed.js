import './Feed.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
    <div className="FeedPage">
      <div className="FeedPageHeader">
        <h3>{profiles.length} profiles found</h3>
        <div className="FeedPageSort">
          <h3>
            Sort Profiles: <span style={{ fontWeight: 'bold' }}>ASC</span>{' '}
            <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>DESC</span>
          </h3>
          <BsArrowDownUp
            className="FeedPageSortArrows"
            onClick={switchSort}
            size={30}
          ></BsArrowDownUp>
        </div>
      </div>

      <div className="FeedProfilesContainer">
        {profiles
          .slice(0)
          .reverse()
          .map((profile) => (
            <div
              className="FeedProfileCard"
              key={profile.id}
              onClick={() => {
                navigate(`/view-profile/${profile.id}`)
              }}
            >
              <img src={profile.image} alt="post-content" />
              <h3>{profile.Skill.name}</h3>
              <div className="FeedProfileContact">
                <h5>{profile.name}</h5>
                <h5>City: {profile.city}</h5>
                <h5>Contact: {profile.contact}</h5>
              </div>
              <div className="FeedProfileRate">
                <h5>Rate: {profile.rate}/hr</h5>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  )

  const sortDESC = (
    <div className="FeedPage">
      <div className="FeedPageHeader">
        <h3>{profiles.length} profiles found</h3>
        <div className="FeedPageSort">
          <h3>
            Sort Profiles:{' '}
            <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>ASC</span>{' '}
            <span style={{ fontWeight: 'bold' }}>DESC</span>
          </h3>
          <BsArrowDownUp
            className="FeedPageSortArrows"
            onClick={switchSort}
            size={30}
          ></BsArrowDownUp>
        </div>
      </div>

      <div className="FeedProfilesContainer">
        {profiles.map((profile) => (
          <div
            className="FeedProfileCard"
            key={profile.id}
            onClick={() => {
              navigate(`/view-profile/${profile.id}`)
            }}
          >
            <img src={profile.image} alt="post-content" />
            <h3>{profile.Skill.name}</h3>
            <div className="FeedProfileContact">
              <h5>{profile.name}</h5>
              <h5>City: {profile.city}</h5>
              <h5>Contact: {profile.contact}</h5>
            </div>
            <div className="FeedProfileRate">
              <h5>Rate: {profile.rate}/hr</h5>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  )

  return <div>{sort === 'ASC' ? sortASC : sortDESC}</div>
}

export default Feed
