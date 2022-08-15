import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let markOptions
  let hunterOptions
  if (user) {
    markOptions = (
      <nav>
        <h1>Welcome {user.username}!</h1>
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

    hunterOptions = (
      <nav>
        <h1>Welcome {user.username}!</h1>
        <Link className="link" to="/feed">
          Feed
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
        <Link className="link" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )

    return (
      <div>
        {authenticated && user.isHunter === false ? markOptions : hunterOptions}
      </div>
    )
  } else {
    const publicOptions = (
      <nav>
        <Link className="link" to="/feed">
          Feed
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
        <Link className="link" to="/">
          Sign In
        </Link>
      </nav>
    )

    return <div>{publicOptions}</div>
  }
}

export default Nav
