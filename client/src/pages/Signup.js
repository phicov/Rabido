import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    })
    setFormValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    navigate("/signin")
  }

  return (
    <div>
      <nav>
        <Link className="link" to="/">
          Sign In
        </Link>
      </nav>
      <div className="signup-container">
        <div className="signup-background">
          <form className="signup-form" onSubmit={handleSubmit}>
          <img className="signup-img"src="https://i.ibb.co/x7f4nz8/Rabido-Logo.png" alt="Rabido-Logo" border="0"/>
            <h1>Sign Up</h1>
            <hr></hr>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
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
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
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
              <button className="signup-btn"
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
  )
}

export default SignUp
