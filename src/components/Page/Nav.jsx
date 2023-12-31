
import { Link } from "react-router-dom";
import LogOutButton from "../Auth/LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/welcome">
        <h2 className="nav-title">JustChess</h2>
      </Link>
      <div className="navWrapper">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/welcome">
              Login
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/Chess">
              Chess
            </Link>
            <Link className="navLink" to="/profile">
              Profile
            </Link>
            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <Link className="navLink" to="/about">
              About
            </Link>

            <LogOutButton className="navLink logout" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
