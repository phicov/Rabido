import "./App.css"
import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Category from "./pages/Category"
import ProfilesByCategory from "./pages/ProfilesByCategory"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/category-profile" element={<ProfilesByCategory />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
