import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

function SignIn(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    if (payload.isHunter === true) {
      navigate('/feed')
    } else {
      navigate('/profile')
    }
  }

  return (
    <div className="signInBody">
      <div className="signin-container">
        <div className="signin-background">
          <form className="signin-form" onSubmit={handleSubmit}>
            <img
              className="signin-img"
              src="https://i.ibb.co/x7f4nz8/Rabido-Logo.png"
              alt="Rabido-Logo"
              border="0"
            />
            <h1>Sign In</h1>
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
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <button
              className="signin-btn"
              disabled={!formValues.username || !formValues.password}
            >
              Sign In
            </button>
            <hr></hr>
            <div className="link-switch">
              <Link className="link signLink" to="/signup">
                Don't have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
