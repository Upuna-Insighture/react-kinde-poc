import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Blog App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.picture}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;