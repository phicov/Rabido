import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import CatCard from "../components/CatCard"

const URL = "http://localhost:3001"

const Category = (props) => {
  let navigate = useNavigate()
  const [cats, setCats] = useState([])

  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    const res = await axios.get(`${URL}/api/cats/get-cats`)
    console.log(res)
    setCats(res.data)
  }
  return (
    <div>
      <h1>Category</h1>
      <section className="cat-container">
        {cats.map((category) => (
          <CatCard
            className="cats"
            key={category.id}
            onClick={() => {
              navigate(`/get-skills/${category.id}`)
            }}
            category={category.name}
          />
        ))}
      </section>
      <div></div>
    </div>
  )
}
export default Category
