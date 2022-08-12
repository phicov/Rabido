
import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
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
        <Link className="link" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link className="link" to="/feed">
        Feed
      </Link>
      <Link className="link" to="/categories">
        Categories
      </Link>
      <Link to="/signin">Sign In</Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/">
        Sign Out
      </Link>
      </div>
    </nav>
  )

  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Nav
