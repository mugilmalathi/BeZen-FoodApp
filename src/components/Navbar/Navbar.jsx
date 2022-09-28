import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import "../Responsive/Responsive.scss";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("email", JSON.stringify(""));
    localStorage.setItem("name", JSON.stringify(""));
  };

  return (
    <div className="navbar">
      {JSON.parse(localStorage.getItem("email")) ? (
        <Link to="/">
          <div>Home</div>
        </Link>
      ) : (
        ""
      )}

      {JSON.parse(localStorage.getItem("email")) ? (
        <Link to="/logout">
          <div onClick={handleLogout}>Logout</div>
        </Link>
      ) : (
        <Link to="/signup">
          <div>Account</div>
        </Link>
      )}

      {JSON.parse(localStorage.getItem("email")) ? (
        <Link to="/add">
          <div>Add Recipe</div>
        </Link>
      ) : (
        ""
      )}

      {JSON.parse(localStorage.getItem("email")) ? (
        <Link to="/">
          <div>Welcome , {JSON.parse(localStorage.getItem("name"))}</div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
