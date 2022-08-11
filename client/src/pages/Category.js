import React from "react"
import { Link } from "react-router-dom"

function Category(props) {
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
    </div>
  )
}

export default Category
