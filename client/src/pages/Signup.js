import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const URL = 'http://localhost:3001'

function Signup(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
    isHunter: false
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      city: formValues.city,
      isHunter: formValues.isHunter
    }

    await axios.post(`${URL}/api/users/register-user`, data)

    setFormValues({
      username: '',
      email: '',
      password: '',
      city: '',
      isHunter: false
    })
    navigate('/')
  }

  return (
    <div className="signUpBody">
      <div>
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
                    onChange={() =>
                      setFormValues((prev) => ({
                        ...prev,
                        isHunter: !prev.isHunter
                      }))
                    }
                    type="checkbox"
                    name="hunterCheck"
                  />
                  <span className="hunterText">Looking for Experts?</span>
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
                <Link className="link signLink" to="/">
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

export default Signup
