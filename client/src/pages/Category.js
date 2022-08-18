import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import graphicsDesign from '../assets/graphics-design.png'
import admin from '../assets/admin.jpeg'
import music from '../assets/audio.webp'
import animation from '../assets/animation.avif'
import program from '../assets/program.png'
import lifestyle from '../assets/lifestyle.jpeg'
import write from '../assets/write.jpeg'
import './CatsPage.css'

const URL = 'http://localhost:3001'

const Category = (props) => {
  let navigate = useNavigate()
  const [designCat, setDesignCat] = useState([])
  const [adminCat, setAdminCat] = useState([])
  const [audioCat, setAudioCat] = useState([])
  const [vidCat, setVidCat] = useState([])
  const [techCat, setTechCat] = useState([])
  const [lifeCat, setLifeCat] = useState([])
  const [writeCat, setWriteCat] = useState([])

  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    const res = await axios.get(`${URL}/api/cats/get-cats`)
    console.log(res.data)
    setDesignCat(res.data[0])
    setAdminCat(res.data[1])
    setAudioCat(res.data[2])
    setVidCat(res.data[3])
    setTechCat(res.data[4])
    setLifeCat(res.data[5])
    setWriteCat(res.data[6])
  }
  return (
    <div>
      <h1 className="title">Categories</h1>
      <div className="cat-container">
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${designCat.id}`)}
            src={graphicsDesign}
          ></img>
          <p className="catName">{designCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${adminCat.id}`)}
            src={admin}
          ></img>
          <p className="catName">{adminCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${audioCat.id}`)}
            src={music}
          ></img>
          <p className="catName">{audioCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${vidCat.id}`)}
            src={animation}
          ></img>
          <p className="catName">{vidCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${techCat.id}`)}
            src={program}
          ></img>
          <p className="catName">{techCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${lifeCat.id}`)}
            src={lifestyle}
          ></img>
          <p className="catName">{lifeCat.name}</p>
        </div>
        <div className="catcard">
          <img
            className="catImg"
            onClick={() => navigate(`/get-skills/${writeCat.id}`)}
            src={write}
          ></img>
          <p className="catName">{writeCat.name}</p>
        </div>
      </div>
    </div>
  )
}
export default Category
