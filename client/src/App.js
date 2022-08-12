import "./App.css"
import { Route, Routes } from "react-router"
import { useState, useEffect } from "react"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Category from "./pages/Category"
import ProfilesByCategory from "./pages/ProfilesByCategory"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<SignIn />}
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/category-profile" element={<ProfilesByCategory />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
