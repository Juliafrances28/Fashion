import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <div>
        <ul className="navbar">
          <li className="nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Reading"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reading
            </Link>
          </li>

          <li className="nav">
            <Link
              to="Books"
              className={
                window.location.pathname === "/Books"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
