import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    isHunter: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      city: formValues.city,
      isHunter: formValues.isHunter,
    })
    setFormValues({
      username: "",
      email: "",
      password: "",
      city: "",
      isHunter: "",
    })
    navigate("/")
  }

  return (
    <div className="signUpBody">
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
        <div className="signup-container">
          <div className="signup-background">
            <form className="signup-form" onSubmit={handleSubmit}>
              <img
                className="signup-img"
                src="https://i.ibb.co/x7f4nz8/Rabido-Logo.png"
                alt="Rabido-Logo"
                border="0"
              />
              <h1>Sign Up</h1>
              <hr></hr>
              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formValues.username}
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  required
                />
              </div>

              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formValues.city}
                  required
                />
              </div>
              <div className="hunterInput">
                <label className="hunterLabel">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="hunterCheck"
                    value={formValues.hunterCheck}
                    required
                  />
                  <span className="hunterText">Hunter?</span>
                </label>
              </div>
              <button
                className="signup-btn"
                disabled={
                  !formValues.email ||
                  (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
              >
                Sign Up
              </button>
              <hr></hr>
              <div className="link-switch">
                <Link className="link" to="/">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
