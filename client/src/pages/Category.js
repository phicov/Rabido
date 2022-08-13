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
      <nav>
        <Link className="link" to="/feed">
          Feed
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
        <Link className="link" to="/">
          Sign Out
        </Link>
      </nav>
      <h1>Category</h1>
      <section className="container-grid">
        {cats.map((category) => (
          <CatCard
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
