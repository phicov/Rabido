import { Link } from "react-router-dom"

const Nav = ({ authenticated, user, handleLogOut }) => {
  let markOptions
  let hunterOptions
  if (user) {
    markOptions = (
      <nav className="navMain">
        <h4 className="link">Welcome {user.username}!</h4>
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
      <nav className="navMain">
        <h4 className="navName">Welcome {user.username}!</h4>
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
      <nav className="navMain">
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
