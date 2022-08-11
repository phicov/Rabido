import "./App.css"
import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Feed from "./pages/Feed"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
